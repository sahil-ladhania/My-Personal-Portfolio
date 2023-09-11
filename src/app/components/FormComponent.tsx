import React from 'react'

const FormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='hover:bg-slate-900 pt-5 pb-5 pr-2 pl-2 rounded-md mb-10'>
                    <form action="">
                        <h1 className='mb-5 tracking-wide text-xl'>Contact Me Form</h1>
                        <div className='flex justify-between mb-5'>
                            <input className='w-2/5 h-10 p-3 rounded-sm outline-none bg-slate-200' type="text" name="" id="" placeholder='Sahil Ladhania'/>
                            <input className='w-2/4 h-10 p-3 rounded-sm outline-none bg-slate-200' type="text" name="" id="" placeholder='sahilladhania5@gmail.com'/>
                        </div>
                        <div className='flex flex-col'>
                            <input className='h-40 p-3 mb-3 rounded-sm outline-none bg-slate-200' type="text" name="" id="" placeholder='Your Message...'/>
                            <button className='border-2 h-10 rounded-sm border-transparent bg-slate-200 text-slate-900 font-semibold'>Send Message</button>
                        </div>
                    </form>
                </div>
            </>
        </div>
    )
}

export default FormComponent
