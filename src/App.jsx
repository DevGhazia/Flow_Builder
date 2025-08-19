import { useState } from 'react'
import { FlowBuilder } from './pages/FlowBuilder'
import { Provider } from 'react-redux'
import { ReactFlowProvider } from '@xyflow/react';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      < ReactFlowProvider>
        <FlowBuilder />
      </ReactFlowProvider>
    </Provider>
  )
}

export default App
