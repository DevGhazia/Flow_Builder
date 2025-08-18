import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from '../nodes/nodesSlice.js'

export const store = configureStore({
    reducer: {
        nodes: nodesReducer,
    },
})