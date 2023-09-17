import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link';

const AllProjectsHeadingComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className="h-40 flex flex-col justify-center">
                    <Link href="/" className='flex items-center h-auto mt-40 hover:underline hover:decoration-teal-400 mb-5'>
                        <span className="mr-3 text-lg text-teal-300 font-medium"><BiArrowBack/></span>
                        <span className="text-lg text-teal-300 font-medium">Sahil Ladhania</span>
                    </Link>
                    <h1 className='text-5xl font-bold h-20 text-slate-300'>All Projects</h1>
                </div>
            </>
        </div>
    )
}

export default AllProjectsHeadingComponent
