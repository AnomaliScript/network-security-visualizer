import ReactFlow, {
    Node,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    ConnectionMode,
    NodeChange,
    Handle,
    Position
} from 'reactflow';

import 'reactflow/dist/style.css';
import { useCallback, MouseEvent, useRef } from 'react';
import Toolbox from '../components/sandbox/Toolbox';
import '../components/sandbox/Toolbox.css';

import internetIcon from '../assets/internet.png';

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

// Must be OUTSIDE the Sandbox function to avoid re-renders
const nodeTypes = { internet: InternetNode };

// Define which device types can connect to which
const connectionRules: Record<string, string[]> = {
    "Router": ["Switch", "Router", "Firewall", "Server"],
    "Switch": ["Router", "PC", "Server", "Switch"],
    "Firewall": ["Router", "Server"],
    "Server": ["Switch", "Router", "Firewall"],
    "PC": ["Switch"],

};

// Info about each device type (when it's clicked)
const deviceInfo: Record<string, string> = {
    "Router": "Forwards data packets between different networks, determining the best path for traffic to travel.",
    "Switch": "Connects devices within a local network, using MAC addresses to forward data to the correct device.",
    "Access Point": "Provides wireless connectivity, allowing Wi-Fi devices to join a wired network without cables.",
    "Modem": "Converts signals between your ISP and your local network, enabling internet access over cable or phone lines.",
    "Gateway": "Acts as a network entry point, often combining router and modem functions to translate between different protocols.",
    "Firewall": "Monitors and filters incoming and outgoing network traffic based on security rules to block threats.",
    "Server": "A dedicated computer that provides services like file storage, websites, or email to other networked devices.",
    "PC": "A personal computer that connects to a network to access shared resources and internet services.",
    "Laptop": "A portable computer with built-in wireless networking for mobile access to network resources.",
    "Phone": "A smartphone capable of connecting to networks via Wi-Fi or cellular data for communication and browsing.",
    "Tablet": "A touchscreen mobile device that connects wirelessly to networks for browsing, apps, and media consumption.",
    "Printer": "A network-enabled printer that receives print jobs wirelessly or via Ethernet from connected devices.",
    "Cell Tower": "A telecommunications structure that transmits and receives cellular signals, connecting mobile devices to wider networks.",
    "Carrier Core": "The central backbone of a telecom network, routing voice and data traffic between cell towers and the internet.",
    "Landline": "A traditional wired telephone connection that transmits voice signals through physical copper or fiber-optic cables.",
};

function Sandbox() {
    const [nodes, setNodes, applyNodeChanges] = useNodesState([
        {
            id: 'Internet-0',
            type: 'internet',          // matches the key in nodeTypes
            data: { label: 'Internet' },
            position: { x: 400, y: 50 },
        }
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    
    const timeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

    // Helper to get the device type from a node id (e.g. "Router-1" → "Router")
    const getDeviceType = (nodeId: string) => nodeId.split("-")[0];

    const onNodesChange = useCallback((changes: NodeChange[]) => {
        const filtered = changes.filter(
            (change) => !(change.type === 'remove' && change.id === 'Internet')
        );
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

            setEdges((eds) => addEdge(connection, eds));
        },
        [setEdges, edges]
    );

    // onNodeClick is called when the user clicks on a node
    const onNodeClick = useCallback((event: MouseEvent, node: Node) => {
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
        <div className="sandbox-container">
            <Toolbox onAddNode={addNode} />
            <div style={{ height: '100vh', width: '100vw' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={onNodeClick}
                    connectionMode={ConnectionMode.Loose}
                />
            </div>
        </div>
    );
}

export default Sandbox;