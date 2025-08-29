import { getConnectedEdges } from "@xyflow/react";
const FLOW_KEY = "flowState";

export function createNewNode(id, type, position, data){
    return {id, type, position, data};
}

export function getNodeFromId(nodes, nodeId){
    return nodes.find((node)=>node.id === nodeId)
}

export function areAllNodesConnected(nodes, edges){
    return nodes.every((node)=> getConnectedEdges([node], edges).length >0);
};

export function saveFlow(nodes, edges){
    const newFlowState = {nodes, edges};
    localStorage.setItem(FLOW_KEY, JSON.stringify(newFlowState));
}

export function getSavedFlow(){
    return JSON.parse(localStorage.getItem(FLOW_KEY));
}