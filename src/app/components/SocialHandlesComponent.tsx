import React from 'react'
import { BsGithub , BsInstagram , BsTwitter , BsLinkedin } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si";

const SocialHandlesComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex mb-20 w-2/5 justify-between'>
                    <a className='text-2xl text-slate-300 hover:text-slate-100' href="https://github.com/sahil-ladhania"><BsGithub/></a>
                    <a className='text-2xl text-slate-300 hover:text-slate-100' href="https://www.instagram.com/sahil.ladhania/"><BsInstagram/></a>
                    <a className='text-2xl text-slate-300 hover:text-slate-100' href="https://www.linkedin.com/in/sahil-ladhania/"><BsLinkedin/></a>
                    <a className='text-2xl text-slate-300 hover:text-slate-100' href="https://twitter.com/SahilLadhania"><BsTwitter/></a>
                    <a className='text-2xl text-slate-300 hover:text-slate-100' href="https://leetcode.com/progress/"><SiLeetcode/></a>
                </div>
            </>
        </div>
    )
}

export default SocialHandlesComponent
