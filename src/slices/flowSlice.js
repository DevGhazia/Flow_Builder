import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "@xyflow/react";
import { areAllNodesConnected, getSavedFlow, saveFlow } from "../utils/nodesUtil";

// Getting the saved flow instance from local storage
const savedFlow = getSavedFlow();

const initialNodes = [
    {id: 'n1', type: 'message', position: {x:0, y:0}, data: {text: 'Text message'} },
    {id: 'n2', type: 'message', position: {x:400, y:100}, data: {text: 'Text message'}}
]

const initialEdges = [
    {id: 'xy-edge__n1-n2', source: 'n1', target: 'n2'}
]

const initialState = {
    nodes: savedFlow? savedFlow.nodes : initialNodes,
    edges: savedFlow? savedFlow.edges : initialEdges,
    type: "message",
    selectedNodeId: null,
    allConnected: true,
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
            state.selectedNodeId = action.payload;
        },
        setAllConnected: (state, action)=>{
            state.allConnected = action.payload;
        }
    },
    extraReducers: (builder)=>{}
});

export const {
    updateNodes, 
    setNodeChanges, 
    setEdgeChanges, 
    connectEdges, 
    setType, 
    setSelectedNodeId, 
    setAllConnected,
} = flowSlice.actions;

// Thunk
export const saveIfConnected = () =>(dispatch, getState)=>{
    const {nodes, edges} = getState().flow;
    const areConnected = areAllNodesConnected(nodes, edges);
    dispatch(setAllConnected(areConnected));
    if(areConnected)
        saveFlow(nodes, edges);
}

export default flowSlice.reducer;
 