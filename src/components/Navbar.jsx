import React from 'react'

// different button styles
const button_default = "h-full px-3 bg-white text-sm font-semibold border-2 rounded-md"
const button_normal = "text-blue-600 border-blue-600"
const button_error = " text-black bg-red-300 border-none"

export const Navbar = () => {
    return (
        <>
            {/* <div className="flex justify-center items-center py-1.5 bg-gray-100">
                <div className={`${button_default} ${button_error} flex items-center`}>
                    <span>Cannot save Flow</span>
                </div>
            </div> */}
            <div className="flex justify-center items-center py-1.5 bg-gray-100">
                <div className={`h-full px-3 text-sm font-semibold rounded-md bg-red-300 flex items-center`}>
                    <span>Cannot save Flow</span>
                </div>
            </div>
            <div className="flex justify-center items-center py-1.5 bg-gray-100">
                <button className={`${button_default} ${button_normal}`}>Save Changes</button>
            </div>
        </>
    )
}
