import { addEdge, applyEdgeChanges, applyNodeChanges, ReactFlow } from '@xyflow/react'
import React, { useCallback, useState } from 'react'
import '@xyflow/react/dist/style.css';

const initialNodes = [
    {id: 'n1', position:  {x:0, y:0}, data: {label: 'Node 1'}},
    {id: 'n2', position:  {x:100, y:100}, data: {label: 'Node 2'}}
]

const initialEdges = [
    {id: 'n1-n2', source: 'n1', target: 'n2'}
]

export const FlowPanel = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback((changes)=>{
        setNodes(prev => applyNodeChanges(changes, prev));
    }, []);

    const onEdgesChange = useCallback((changes)=>{
        setEdges(prev=> applyEdgeChanges(changes, prev)); 
    }, []);

    const onConnect = useCallback((params)=>{
        setEdges(prev=> addEdge(params, prev));
    }, []);

    return (
        <div className='flex-grow'>
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            />
        </div>
    )
}
