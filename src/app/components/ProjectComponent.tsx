import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const ProjectComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='mb-10'>
                    <a className='flex hover:bg-slate-500/10 hover:drop-shadow-lg pt-6 pb-6 pr-4 pl-4 rounded-md' href="#">
                        {/* Left Container */}
                        <div className='w-1/4 mr-5'>
                            <img className='h-20 w-32 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTTtvcIRJ0qF2gGij5kPoUGBegKWReHdvQQ&usqp=CAU" alt="" />
                        </div>
                        {/* Right Container */}
                        <div className='w-3/4'>
                            <div className='flex items-center'>
                                <span className='tracking-wide hover:text-teal-300 font-semibold text-lg'>Build a Food Delivery App</span>
                                <span className='p-3'><FiArrowUpRight/></span>
                            </div>
                            <p className='text-justify mb-5 text-sm text-slate-400'>
                                YummmZo is a full-stack food delivery application I developed as a part of my journey in becoming a software engineer. Its built using the MERN stack and React Native for cross-platform mobile development.
                            </p>
                            <div>
                                <ul className='flex flex-wrap'>
                                    <li className='h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5'>React</li>
                                    <li className='h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5'>Node</li>
                                    <li className='h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5'>Express</li>
                                    <li className='h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5'>REST API</li>
                                    <li className='h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5'>MongoDB</li>
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
