import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "@xyflow/react";

const initialNodes = [
    {id: 'n1', type: 'message', position: {x:0, y:0}, data: {text: 'Text message'} },
    {id: 'n2', type: 'message', position: {x:400, y:100}, data: {text: 'message 1'}}
]

const initialEdges = [
    {id: 'n1-n2', source: 'n1', target: 'n2'}
]

const initialState = {
    nodes: initialNodes,
    edges: initialEdges,
    type: "message",
    seletedNodeId: null
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
        setType : (state, action) =>{
            state.type = action.payload;
        },
        setSelectedNodeId : (state, action)=>{
            state.seletedNodeId = action.payload;
        },
    },
    extraReducers: (builder)=>{}
});

export const {updateNodes, setNodeChanges, setEdgeChanges, connectEdges, setType, setSelectedNodeId} = flowSlice.actions;
export default flowSlice.reducer;
 