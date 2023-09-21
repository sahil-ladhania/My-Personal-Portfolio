import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const ProjectsTableComponent = () => {
    return (
        <div className='py-20'>
            <>
                {/* Main Component */}
                <table className="table-fixed mt-12 w-full border-collapse text-left">
                    <thead className='sticky top-0 z-10 border-b border-slate-300/10 px-6 backdrop-blur'>
                        <tr>
                            <th className='h-10 w-16 py-4 pr-8 font-md text-sm'>Year</th>
                            <th className='h-10 w-72 font-md text-sm'>Project Description</th>
                            <th className='h-10 w-40 font-md text-sm'>Project Name</th>
                            <th className='h-10 w-96 font-md text-sm'>Built With</th>
                            <th className='h-10 w-64 font-md text-sm'>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* YummmZo Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2023</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>YummmZo is your gateway to gastronomic delights. Powered by the MERN stack, it offers a seamless food ordering experience, bringing your favorite dishes right to your doorstep.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className="flex h-auto flex-wrap">
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        HTML
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Tailwind CSS
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        React
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Javascript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Node
                                    </li> 
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li> 
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        MongoDB
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Mongoose
                                    </li>  
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        REST API
                                    </li> 
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <a className='mr-3' href="#">YummmZo.in</a>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* ToDoGenius Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2023</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>ToDoGenius, built with the MERN stack, is your ultimate task manager. Organize your life effortlessly, prioritize tasks, and boost productivity with this intuitive to-do list application.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>ToDoGenius</td>
                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className="flex h-auto flex-wrap">
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        HTML
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        CSS
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        React
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Javascript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Node
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        MongoDB
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Mongoose
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        REST API
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <a className='mr-3' href="https://todogenius.netlify.app/">todogenius.in</a>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* SkyTracker Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2023</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Stay ahead of the weather with Skytracker. A dynamic React.js application, it connects to the Open Weather API to provide real-time weather updates, helping you plan your day with confidence.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>SkyTracker</td>
                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className="flex h-auto flex-wrap">
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        HTML
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Tailwind CSS
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        React
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Javascript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Open Weather API
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <a className='mr-3' href="https://sky-tracker.netlify.app/">skytracker.in</a>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* Calculisious Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Calculisiious is your trusty calculator companion. Developed with HTML, CSS, and JavaScript, it simplifies complex calculations while sporting an elegant and user-friendly interface.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>Calculisious</td>
                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className="flex h-auto flex-wrap">
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        HTML
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        CSS
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Javascript
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <a className='mr-3' href="https://calculisious.netlify.app/">calculisious.in</a>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* Adobe Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Explore the world of design with our Adobe Clone project. Crafted with HTML and CSS, it offers a glimpse into the creative possibilities of web development, paying homage to the renowned design software.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>Adobe</td>
                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className="flex h-auto flex-wrap">
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        HTML
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        CSS
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <a className='mr-3' href="https://adobe-home.netlify.app/">adobeclone.in</a>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* My First Website Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>My First Website is a stepping stone into the world of web development. Created with HTML, it represents the humble beginnings of my coding journey, showcasing my initial web design skills.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>My First Website</td>
                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className="flex h-auto flex-wrap">
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        HTML
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <a className='mr-3' href="https://sahils-first-project.netlify.app/">myfirstwebsite.in</a>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        </div>
    )
}

export default ProjectsTableComponent
