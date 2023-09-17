import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

const ResumeComponent = () => {
    return (
        <div>
            <>
                {/* Main Copmponent */}
                <div className='flex items-center mb-10 text-sm hover:underline hover:decoration-teal-300'>
                    <a className='mr-3 pt-3 pb-3 pr-3 tracking-wide text-slate-200 font-semibold' href="#">View Full Résumé</a>
                    <span className='p-3 text-slate-200 font-semibold'><AiOutlineArrowRight/></span>
                </div>
            </>
        </div>
    )
}

export default ResumeComponent
