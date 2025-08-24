import { Handle } from '@xyflow/react'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedNodeId } from '../slices/flowSlice'


export default function MessageNode({id, data}){
    const dispatch = useDispatch();
    const {seletedNodeId} = useSelector((state)=>state.flow);
    return (
        <>
            <div 
                className={`flex flex-col w-60 drop-shadow-lg border-2 hover:border-blue-400 rounded-[4px] overflow-hidden 
                    ${id===seletedNodeId? 'hover:border-blue-800 border-blue-800' : ''}`}
                tabIndex={0}
                onClick={()=>dispatch(setSelectedNodeId(id))} 
            >
                <div className='flex flex-start gap-1 items-center bg-[#b7ede3] px-2 py-1'>
                    <BiMessageRoundedDetail className='text-xs text-blue-600'/>
                    <span className='flex-grow text-xs font-bold'>Send Message</span>
                    <IoLogoWhatsapp className='text-xs text-[#58b472]'/>
                </div>
                <div className='p-2 flex bg-white'>
                    <span className='text-sm'>
                        {data.text}
                    </span>
                </div>
            </div>
            <Handle type='source' position='right' style={{ height:'8px', width:'8px'}}/>
            <Handle type='target' position='left' style={{ height:'8px', width:'8px'}}/>
        </>
    )
}
