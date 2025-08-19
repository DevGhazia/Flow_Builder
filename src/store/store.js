import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from '../slices/flowSlice.js'

const store = configureStore({
    reducer: {
        flow: nodesReducer,
    },
})

export default store; 
