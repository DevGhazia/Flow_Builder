import React from 'react'
import { Navbar } from '../components/Navbar'
import { FlowPanel } from '../components/FlowPanel'
import { Sidebar } from '../components/Sidebar'


export const FlowBuilder = () => {
    return (
        <div className='h-screen w-screen flex flex-col'>
            <Navbar />
            <div className='flex flex-grow'>
                <FlowPanel />
                <Sidebar />
            </div>
        </div>
    )
}
