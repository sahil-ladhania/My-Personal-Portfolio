import React from 'react'

const SideNavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <ul className='h-auto'>
                        <li className='uppercase font-medium text-slate-400 text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3 hover:text-slate-200' href="#">About me</a></li>
                        <li className='uppercase font-medium text-slate-400 text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3 hover:text-slate-200' href="#">Skills</a></li>
                        <li className='uppercase font-medium text-slate-400 text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3 hover:text-slate-200' href="#">Projects</a></li>
                        <li className='uppercase font-medium text-slate-400 text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3 hover:text-slate-200' href="#">Contact Me</a></li>
                    </ul>
                </div>
            </>
        </div>
    )
}

export default SideNavbarComponent
