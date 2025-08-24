import React from 'react'
import { Navbar } from '../components/Navbar'
import { FlowPanel } from '../components/FlowPanel'
import { Sidebar } from '../components/Sidebar'

export const FlowBuilder = () => {
    return (
        <div className='grid grid-rows-[50px_1fr] grid-cols-[1fr_min-content] h-screen'>
            <Navbar />
            <FlowPanel />
            <Sidebar />
        </div>
    )
}
