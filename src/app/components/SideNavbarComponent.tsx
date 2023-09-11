import React from 'react'

const SideNavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <ul className='h-auto'>
                        <li className='uppercase text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3' href="#">About</a></li>
                        <li className='uppercase text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3' href="#">Skills</a></li>
                        <li className='uppercase text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3' href="#">Projects</a></li>
                        <li className='uppercase text-sm pt-3 pr-10 pb-3'><a className='pt-3 pr-10 pb-3' href="#">Contact Me</a></li>
                    </ul>
                </div>
            </>
        </div>
    )
}

export default SideNavbarComponent
