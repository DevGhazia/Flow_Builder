import React, { useState } from 'react'
import { BiMessageRoundedDetail } from 'react-icons/bi';

export const Sidebar = () => {
    const [type, setType] = useState();
    function onDragStart(event, typeNode){
        setType(typeNode);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className='w-[300px] border border-gray-300'>
            <div className='grid grid-cols-2 p-2 gap-2 text-sm text-blue-600'>
                <div className='flex flex-col justify-center items-center gap-1 py-2 border border-blue-600 rounded-[5px] cursor-grab' onDragStart={(event)=>onDragStart(event, 'text')} draggable >
                    <BiMessageRoundedDetail className='text-2xl'/>
                    <span>Message</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-1 py-2 border border-blue-600 rounded-[5px] cursor-grab' onDragStart={(event)=>onDragStart(event, 'text')} draggable >
                    <BiMessageRoundedDetail className='text-2xl'/>
                    <span>Message</span>
                </div>
            </div>
        </aside>
    )
}
