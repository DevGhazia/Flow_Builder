import { useDispatch, useSelector } from 'react-redux'
import {  saveIfConnected } from '../slices/flowSlice'

// different button styles
const button_default = "h-full px-3 bg-white text-sm font-semibold border-2 rounded-md"
const button_normal = "text-blue-600 hover:bg-gray-50 active:scale-95"

export const Navbar = () => {
    const dispatch = useDispatch();
    const {allConnected} = useSelector((state)=>state.flow);

    return (
        <>
            <div className="flex justify-center items-center py-1.5 bg-gray-100">
                {
                    !allConnected &&
                    <div className={`h-full px-3 text-sm font-semibold rounded-md bg-red-300 flex items-center`}>
                        <span>Cannot save Flow</span>
                    </div>
                }
            </div>
            <div className="flex justify-center items-center py-1.5 bg-gray-100">
                <button     
                    className={`${button_default} ${button_normal} ${allConnected? "": 'border-red-500'}`} 
                    onClick={()=>dispatch(saveIfConnected())}
                >
                    Save Changes
                </button>
            </div>
        </>
    )
}
