import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

const ViewProjectsComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center mb-10 text-lg underline'>
                    <a className='mr-3 pt-3 pb-3 pr-3 tracking-wide' href="#">View Full Resume</a>
                    <span className='p-3'><AiOutlineArrowRight/></span>
                </div>
            </>
        </div>
    )
}

export default ViewProjectsComponent
