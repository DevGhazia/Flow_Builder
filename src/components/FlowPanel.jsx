import { ReactFlow, useReactFlow } from '@xyflow/react'
import { useCallback } from 'react'
import '@xyflow/react/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateNodes, setNodeChanges, setEdgeChanges, connectEdges, setSelectedNodeId } from '../slices/flowSlice';
import MessageNode from '../node_types/MessageNode';
import { createNewNode } from '../utils/nodesUtil';
import { onDragOver, onDragStart } from '../utils/dragUtil';

export const FlowPanel = () => {
    const {nodes, edges, type } = useSelector((state)=>state.flow);
    const dispatch = useDispatch();
    const { screenToFlowPosition } = useReactFlow();

    const nodeTypes = {message : MessageNode}

    const defaultEdgeStyling = {markerEnd: {type:'arrow', height:'25px', width:'25px'}};

    const onNodesChange = useCallback((changes)=>{
        dispatch(setNodeChanges(changes));
    }, []);

    const onEdgesChange = useCallback((changes)=>{
        dispatch(setEdgeChanges(changes));
    }, [dispatch]);

    const onConnect = useCallback((params)=>{
        dispatch(connectEdges(params));
    }, [dispatch]);

    // creates a new node
    const onDrop = useCallback((event)=>{
        event.preventDefault();
        const position = screenToFlowPosition({x: event.clientX, y: event.clientY});
        const newNode = createNewNode(`n${nodes.length + 1}`, type, position, {text: 'Text message'});
        dispatch(updateNodes([...nodes, newNode]));    
    }, [screenToFlowPosition, type, nodes]);

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
                onDragOver={onDragOver}
                nodeTypes={nodeTypes}
                onPaneClick={()=>dispatch(setSelectedNodeId(null))}
                onNodesDelete={()=>dispatch(setSelectedNodeId(null))}
                fitView
            />
        </div>
    )
}
