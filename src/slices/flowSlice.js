import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges, applyNodeChanges, Position } from "@xyflow/react";

const defaultHandlePosition = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left
}

const initialNodes = [
    {id: 'n1', position:  {x:0, y:0}, data: {label: 'Node 1'}, ...defaultHandlePosition},
    {id: 'n2', position:  {x:200, y:100}, data: {label: 'Node 2'}, ...defaultHandlePosition}
]

const initialEdges = [
    {id: 'n1-n2', source: 'n1', target: 'n2'}
]

const initialState = {
    nodes: initialNodes,
    edges: initialEdges
}

const flowSlice = createSlice({
    name: "nodes",
    initialState,
    reducers: {
        updateNodes : (state, action)=>{
            state.nodes = action.payload;
        },
        setNodeChanges : (state, action)=>{
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        },
        setEdgeChanges : (state, action)=>{
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
        connectEdges : (state, action)=>{
            state.edges = addEdge(action.payload, state.edges);
        }, 
    },
    extraReducers: (builder)=>{}
});

export const {updateNodes, setNodeChanges, setEdgeChanges, connectEdges} = flowSlice.actions;
export default flowSlice.reducer;
 