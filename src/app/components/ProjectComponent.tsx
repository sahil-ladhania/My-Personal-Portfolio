import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const ProjectComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='mb-10'>
                    <a className='flex hover:bg-slate-500 pt-6 pb-6 pr-4 pl-4 rounded-md' href="#">
                        {/* Left Container */}
                        <div className='w-1/4 mr-5'>
                            <img className='h-20 w-32 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTTtvcIRJ0qF2gGij5kPoUGBegKWReHdvQQ&usqp=CAU" alt="" />
                        </div>
                        {/* Right Container */}
                        <div className='w-3/4'>
                            <div className='flex items-center'>
                                <span className='tracking-wide hover:text-teal-200 font-semibold text-lg'>Build a Food Delivery App</span>
                                <span className='p-3'><FiArrowUpRight/></span>
                            </div>
                            <p className='text-justify mb-5 text-sm'>
                            YummmZo is a full-stack food delivery application I developed as a part of my journey in becoming a software engineer. Its built using the MERN stack and React Native for cross-platform mobile development.
                            </p>
                            <div>
                                <ul className='flex justify-between flex-wrap'>
                                    <li className='pt-1 pb-1 pr-1 pl-1 border-2 border-transparent rounded-2xl bg-teal-300 text-green-900 text-sm'>React</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-teal-300 text-green-900 text-sm'>Node</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-teal-300 text-green-900 text-sm'>Express</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-teal-300 text-green-900 text-sm'>REST API</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-teal-300 text-green-900 mt-5 text-sm'>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </>
        </div>
    )
}

export default ProjectComponent
