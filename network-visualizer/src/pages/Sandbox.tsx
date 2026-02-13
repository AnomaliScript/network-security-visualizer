import ReactFlow, {
    Node,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    ConnectionMode,
    NodeChange,
    Handle,
    Position,
    ReactFlowProvider,
    useReactFlow,
} from 'reactflow';

import 'reactflow/dist/style.css';
import { useCallback, useEffect, useRef, MouseEvent } from 'react';
import Toolbox from '../components/sandbox/Toolbox';
import '../components/sandbox/Toolbox.css';

import internetIcon from '../assets/internet.png';
import { connectionRules, deviceInfo, edgeLabels } from '../components/sandbox/Sandbox2';

// Particle node — a tiny glowing dot, non-interactive
const ParticleNode = ({ data }: { data: { size: number; opacity: number } }) => (
    <div
        style={{
            width: data.size,
            height: data.size,
            borderRadius: '50%',
            background: `rgba(255, 255, 255, ${data.opacity})`,
            boxShadow: `0 0 ${data.size * 2}px rgba(255, 255, 255, ${data.opacity * 0.5})`,
            pointerEvents: 'none',
        }}
    />
);

// Set to false to disable particle background
const PARTICLES_ENABLED = true;

// Generate initial particle nodes spread across a large area
const PARTICLE_COUNT = 240;
const SPREAD = 5000;

interface ParticleVelocity {
    vx: number;
    vy: number;
}

const particleVelocities: Record<string, ParticleVelocity> = {};

function createParticleNodes(): Node[] {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const id = `_particle-${i}`;
        const vx = (Math.random() - 0.5) * 4;
        const vy = (Math.random() - 0.5) * 4;
        particleVelocities[id] = { vx, vy };
        return {
            id,
            type: 'particle',
            data: {
                size: Math.random() * 10 + 5,
                opacity: Math.random() * 0.5 + 0.1,
            },
            position: {
                x: (Math.random() - 0.5) * SPREAD,
                y: (Math.random() - 0.5) * SPREAD,
            },
            selectable: false,
            draggable: false,
            connectable: false,
        };
    });
}

const initialParticles = PARTICLES_ENABLED ? createParticleNodes() : [];

// Custom node component - must be OUTSIDE the Sandbox function
const InternetNode = () => (
  <div
    style={{
      textAlign: 'center',
      width: 120,          // make node wider
      height: 120,         // make node taller
      padding: 18,
      borderRadius: 8,
      background: '#ffffff',
      border: '1px solid #000000',
      position: 'relative', // required so handle styles use this as reference
    }}
  >
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
    <Handle type="source" position={Position.Left} id="left" />
    <Handle type="source" position={Position.Right} id="right" />

    <img src={internetIcon} alt="Internet" width={50} height={50} />
    <div>Internet</div>
  </div>
);

// Animates particles, wrapping them around a viewport-following region
// The wrap center is snapped to a coarse grid so it doesn't jitter on zoom
function ParticleAnimator({ setNodes, active }: { setNodes: React.Dispatch<React.SetStateAction<Node[]>>; active: boolean }) {
    const reactFlow = useReactFlow();
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = document.querySelector('.react-flow') as HTMLDivElement;
        containerRef.current = el;
    }, []);

    useEffect(() => {
        if (!active) return; // Don't animate when hidden

        let animId: number;
        const HALF = SPREAD / 2;
        const SNAP = SPREAD / 2;

        const animate = () => {
            const el = containerRef.current;
            if (el) {
                const viewport = reactFlow.getViewport();
                const w = el.clientWidth;
                const h = el.clientHeight;
                const cx = -viewport.x / viewport.zoom + w / (2 * viewport.zoom);
                const cy = -viewport.y / viewport.zoom + h / (2 * viewport.zoom);
                const snapCx = Math.round(cx / SNAP) * SNAP;
                const snapCy = Math.round(cy / SNAP) * SNAP;

                setNodes((nds) =>
                    nds.map((n) => {
                        if (!n.id.startsWith('_particle-')) return n;
                        const vel = particleVelocities[n.id];
                        if (!vel) return n;

                        let nx = n.position.x + vel.vx;
                        let ny = n.position.y + vel.vy;

                        nx = ((nx - (snapCx - HALF)) % SPREAD + SPREAD) % SPREAD + (snapCx - HALF);
                        ny = ((ny - (snapCy - HALF)) % SPREAD + SPREAD) % SPREAD + (snapCy - HALF);

                        return { ...n, position: { x: nx, y: ny } };
                    })
                );
            }
            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animId);
    }, [setNodes, reactFlow, active]);

    return null;
}

// Must be OUTSIDE the Sandbox function to avoid re-renders
const nodeTypes = { internet: InternetNode, particle: ParticleNode };

function Sandbox({ active = true }: { active?: boolean }) {
    // The only constant node: the Internet node + particles
    const [nodes, setNodes, applyNodeChanges] = useNodesState([
        {
            id: 'Internet-0',
            type: 'internet',
            data: { label: 'Internet' },
            position: { x: 400, y: 50 },
        },
        ...initialParticles,
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    
    const timeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

    // Particle animation is handled by <ParticleAnimator /> inside ReactFlow

    // Helper to get the device type from a node id (e.g. "Router-1" → "Router")
    const getDeviceType = (nodeId: string) => nodeId.split("-")[0];

    const onNodesChange = useCallback((changes: NodeChange[]) => {
        const filtered = changes.filter((change) => {
            // Don't let users remove the Internet node
            if (change.type === 'remove' && change.id === 'Internet') return false;
            // Don't let users select/drag/remove particles
            const id = 'id' in change ? change.id : '';
            if (id.startsWith('_particle-')) return false;
            return true;
        });
        applyNodeChanges(filtered);
    }, [applyNodeChanges]);

    // onConnect is called when the user tries to connect two nodes
    const onConnect = useCallback(
        (connection: Connection) => {
            if (!connection.source || !connection.target) return;

            // No self-connections
            if (connection.source === connection.target) return;

            // No duplicates
            const exists = edges.find(
                (e) => e.source === connection.source && e.target === connection.target
            );
            if (exists) return;

            // Check connection rules
            const sourceType = getDeviceType(connection.source);
            const targetType = getDeviceType(connection.target);
            const allowed = connectionRules[sourceType];

            if (!allowed || !allowed.includes(targetType)) {
                console.log(`Connection not allowed: ${sourceType} → ${targetType}`);
                return;
            }

            const key = `${sourceType}-${targetType}`;
            const key2 = `${targetType}-${sourceType}`;
            const label = edgeLabels[key] || edgeLabels[key2] || `${sourceType} → ${targetType}`;
            setEdges((eds) => addEdge({ ...connection, label }, eds));

        },
        [setEdges, edges]
    );

    // onNodeClick is called when the user clicks on a node
    const onNodeClick = useCallback((event: MouseEvent, node: Node) => {
        if (node.id.startsWith('_particle-')) return;
        const type = getDeviceType(node.id);
        const originalLabel = node.data.label;

        // Clear any existing timeout for this node
        if (timeoutRef.current[node.id]) {
            clearTimeout(timeoutRef.current[node.id]);
        }

        // Change label to info
        setNodes((nds) => nds.map((n) => 
            n.id === node.id 
                ? { ...n, data: { ...n.data, label: deviceInfo[type] } }
                : n
        ));

        // Revert after 3 seconds
        timeoutRef.current[node.id] = setTimeout(() => {
            setNodes((nds) => nds.map((n) => 
                n.id === node.id 
                    ? { ...n, data: { ...n.data, label: originalLabel } }
                    : n
            ));
            delete timeoutRef.current[node.id];
        }, 3000);
    }, [setNodes]);

    // addNode is called when the user clicks a button in the Toolbox to add a new device
    const addNode = (type: string, count: number) => {
        const newNode: Node = {
            id: `${type}-${count}`,
            data: { label: `${type} ${count}` },
            position: { x: Math.random() * 400, y: Math.random() * 400 },
        };
        setNodes([...nodes, newNode]);
    };

    // Render the Toolbox and the ReactFlow canvas
    return (
        <div className="sandbox-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            <Toolbox onAddNode={addNode} />
            <div className="sandbox-canvas" style={{ flex: 1, minHeight: 0, position: 'relative' }}>
                <ReactFlowProvider>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeClick={onNodeClick}
                        connectionMode={ConnectionMode.Loose}
                    >
                        {PARTICLES_ENABLED && <ParticleAnimator setNodes={setNodes} active={active} />}
                    </ReactFlow>
                </ReactFlowProvider>
            </div>
        </div>
    );
}

export default Sandbox;