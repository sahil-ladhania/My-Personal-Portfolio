import React from 'react'

const NameAndIntroComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <h1 className='text-5xl text-slate-200 font-extrabold mb-5 cursor-pointer'>Sahil Ladhania</h1>
                    <span className='text-xl font-semibold text-slate-300 selection:bg-teal-200'>Lead Engineer at YummmZo</span>
                    <p className='text-m mt-3 w-3/4 text-slate-400 selection:bg-teal-200'>I build accessible, inclusive products and digital experiences for the web.</p>
                </div>
            </>
        </div>
    )
}

export default NameAndIntroComponent
