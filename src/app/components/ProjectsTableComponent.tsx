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
                            <th className='h-10 w-72 font-md text-sm'>Project</th>
                            <th className='h-10 w-40 font-md text-sm'>Made at</th>
                            <th className='h-10 w-96 font-md text-sm'>Built with</th>
                            <th className='h-10 w-64 font-md text-sm'>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
                                <span><FiArrowUpRight/></span>
                            </td>
                        </tr>
                        {/* First Project */}
                        <tr className='border-b border-slate-300/10'>
                            <td className='py-4 pr-4 align-top text-sm text-slate-400'>2022</td>
                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio explicabo ducimus laborum labore obcaecati molestiae accusamus facere consequatur itaque distinctio.</td>
                            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-400'>YummmZo</td>
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
                                        Typescript
                                    </li>
                                    <li className="h-auto w-auto px-3 py-1 border-2 text-teal-300 text-sm font-medium border-transparent rounded-full bg-teal-400/10 leading-5 my-1 mr-1.5">
                                        Express
                                    </li>
                                </ul>
                            </td>
                            <td className='py-4 align-top text-slate-400 text-sm flex items-center cursor-pointer hover:text-teal-300'>
                                <span className='mr-3'>www.google.com</span>
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
