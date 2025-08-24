import { applyNodeChanges, ReactFlow, useReactFlow } from '@xyflow/react'
import React, { useCallback } from 'react'
import '@xyflow/react/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateNodes, setNodeChanges, setEdgeChanges, connectEdges, setSelectedNodeId } from '../slices/flowSlice';
import MessageNode from '../node_types/MessageNode';

export const FlowPanel = () => {
    const {nodes, edges, type } = useSelector((state)=>state.flow);
    const dispatch = useDispatch();
    const { screenToFlowPosition } = useReactFlow();

    const nodeTypes = {
        message : MessageNode
    }

    const defaultEdgeStyling = {markerEnd: {type:'arrow', height:'20px', width:'20px'}};

    const onNodesChange = useCallback((changes)=>{
        dispatch(setNodeChanges(changes));
    }, []);

    const onEdgesChange = useCallback((changes)=>{
        dispatch(setEdgeChanges(changes));
    }, [dispatch]);

    const onConnect = useCallback((params)=>{
        dispatch(connectEdges(params));
    }, [dispatch]);

    const onDragStart = (event, nodeType)=>{
        event.dataTransfer.effectAllowed = 'move';
    };
    
    const onDragOver = useCallback((event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event)=>{
        event.preventDefault();
        const position = screenToFlowPosition({x: event.clientX, y: event.clientY});
        const newNode = {id: `n${nodes.length + 1}`, type: type, position, data: {text: 'Text message'}};
        dispatch(updateNodes([...nodes, newNode]));    
    }, [screenToFlowPosition, type]);

    return (
        <div className='flex-grow'>
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                defaultEdgeOptions={defaultEdgeStyling}
                onDragStart={onDragStart}
                onDrop={onDrop}
                nodeTypes={nodeTypes}
                onDragOver={onDragOver}
                onPaneClick={()=>dispatch(setSelectedNodeId(null))}
                fitView
            />
        </div>
    )
}
