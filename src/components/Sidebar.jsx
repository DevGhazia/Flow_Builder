import { BiMessageRoundedDetail } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../slices/flowSlice';
import { useReactFlow } from '@xyflow/react';
import { IoMdArrowBack } from 'react-icons/io';
import { setSelectedNodeId } from '../slices/flowSlice';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const {seletedNodeId, nodes} = useSelector((state) => state.flow);
    const flow = useReactFlow();

    function onDragStart(event, nodeType){
        dispatch(setType(nodeType));
        event.dataTransfer.effectAllowed = 'move';
    };

    const selectedNode = seletedNodeId? nodes.find((node)=>node.id === seletedNodeId) : null;

    return (
        <aside className='w-[300px] text-sm border border-gray-300'>
            { 
                seletedNodeId? 
                // ****** NODE PANEL ******
                <div className='flex flex-col'>
                    <div className='relative flex p-2 border-b border-gray-300 items-center justify-center'>
                        <button 
                            className='h-full aspect-square absolute inset-0 px-2.5 hover:bg-gray-100'
                            onClick={()=>dispatch(setSelectedNodeId(null))}
                        >
                            <IoMdArrowBack />
                        </button>
                        <span>Message</span>
                    </div>
                    <div className='flex flex-col px-2 py-5 gap-3 border-b border-b-gray-300'>
                        <label htmlFor="message" className='text-gray-400'>Text</label>
                        <textarea 
                            id='message'
                            type='text' 
                            value={selectedNode.data.text} 
                            className='min-h-24 p-2 rounded resize-none border border-gray-400'
                            onChange={(event)=>flow.updateNodeData(seletedNodeId, {text: event.target.value})}
                        ></textarea>
                    </div> 
                </div>
                :
                // ****** SETTING PANEL ******
                <div className='grid grid-cols-2 p-2 gap-2 text-sm text-blue-600'>
                    <div className='flex flex-col justify-center items-center gap-1 py-2 border border-blue-600 rounded-[5px] cursor-grab' onDragStart={(event)=>onDragStart(event, 'message')} draggable >
                        <BiMessageRoundedDetail className='text-2xl'/>
                        <span>Message</span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1 py-2 border border-blue-600 rounded-[5px] cursor-grab' onDragStart={(event)=>onDragStart(event, 'group')} draggable >
                        <BiMessageRoundedDetail className='text-2xl'/>
                        <span>Message</span>
                    </div>
                </div>

            }
        </aside>
    )
}
