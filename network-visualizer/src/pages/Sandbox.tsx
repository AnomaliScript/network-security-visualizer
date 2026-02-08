import ReactFlow, { Node } from 'reactflow';
import "reactflow/dist/style.css";
import {  } from '../components/sandbox/Toolbox';

const nodes: Node[] = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Node 1' },
        position: { x: 250, y: 0 },
    },
]

function Sandbox() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <ReactFlow nodes={nodes} />
        </div>
    );
}

export default Sandbox;