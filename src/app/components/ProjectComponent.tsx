import React from 'react'

const ProjectComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='mb-10'>
                    <a className='flex hover:bg-slate-900 pt-5 pb-5 pr-2 pl-2 rounded-md' href="#">
                        {/* Left Container */}
                        <div className='w-1/4 mr-5'>
                            <img className='h-20 w-32 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTTtvcIRJ0qF2gGij5kPoUGBegKWReHdvQQ&usqp=CAU" alt="" />
                        </div>
                        {/* Right Container */}
                        <div className='w-3/4'>
                            <span className='tracking-wide hover:text-green-200 font-semibold text-lg'>Food Delivery App</span>
                            <p className='text-justify mb-5'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ullam quas velit recusandae, at eos enim aut impedit quam repudiandae debitis odio dolorem a quibusdam corrupti, ut, necessitatibus autem repellendus. Architecto, asperiores nulla!
                            </p>
                            <div>
                                <ul className='flex justify-between'>
                                    <li className='pt-1 pb-1 pr-1 pl-1 border-2 border-transparent rounded-2xl bg-green-300 text-green-900 text-sm'>React</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-green-300 text-green-900'>Node</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-green-300 text-green-900'>Express</li>
                                    <li className='pt-1 pb-1 pr-2 pl-2 border-2 border-transparent rounded-2xl bg-green-300 text-green-900'>REST API</li>
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
