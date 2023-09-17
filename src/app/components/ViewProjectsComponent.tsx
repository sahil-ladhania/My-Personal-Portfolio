import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link';

const ViewProjectsComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center mb-10 text-sm hover:underline hover:decoration-teal-300'>
                    <Link href="/projects" className='mr-3 pt-3 pb-3 pr-3 tracking-wide text-slate-200 font-semibold'>
                        View Full Project Archive
                    </Link>
                    <span className='p-3 text-slate-200 font-semibold'><AiOutlineArrowRight/></span>
                </div>
            </>
        </div>
    )
}

export default ViewProjectsComponent
