import { applyNodeChanges, ReactFlow, useReactFlow } from '@xyflow/react'
import React, { useCallback } from 'react'
import '@xyflow/react/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateNodes, setNodeChanges, setEdgeChanges, connectEdges } from '../slices/flowSlice';

export const FlowPanel = () => {
    const {nodes, edges} = useSelector((state)=>state.flow);
    const dispatch = useDispatch();
    const { screenToFlowPosition } = useReactFlow();

    const onNodesChange = useCallback((changes)=>{
        dispatch(setNodeChanges(changes));
    }, []);

    const onEdgesChange = useCallback((changes)=>{
        dispatch(setEdgeChanges(changes));
    }, [dispatch]);

    const onConnect = useCallback((params)=>{
        dispatch(connectEdges(params));
    }, [dispatch]);

    const onDragStart = (event)=>{
        event.dataTransfer.effectAllowed = 'move';
    };

    const onDrop = useCallback((event)=>{
        event.preventDefault();
        const position = screenToFlowPosition({x: event.clientX, y: event.clientY});
        const newNode = {id: `${Math.random()*100}` , position, data: {label: "node nimoda"}};
        dispatch(updateNodes([...nodes, newNode]));    
        console.log(edges, nodes);
    }, [screenToFlowPosition, dispatch]);

    const onDragOver = useCallback((event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div className='flex-grow'>
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
            />
        </div>
    )
}
