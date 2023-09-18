"use client";
import React, {useState} from 'react'
import { TbPlugConnected } from "react-icons/tb";

const FormComponent = () => {
    // State Variables
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');
    // Handler Functions
    const handleSubmit = () => {
        
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='border-2 border-slate-500 pt-6 pb-6 pr-3 pl-3 rounded-md mb-10'>
                    <form action="">
                        {/* Form Heading */}
                        <h1 className='mb-5 flex items-center'>
                            <span className='tracking-wide text-xl'>Connect with me</span>
                            <span className='pl-3 pr-3 text-2xl text-teal-500'><TbPlugConnected/></span>
                        </h1>
                        {/* Name and Email Feilds */}
                        <div className='flex justify-between mb-5'>
                            <input value={name} onChange={(e) => setName(e.target.value)} className='w-2/5 h-10 p-3 rounded-md outline-none bg-slate-200 text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600' type="text" name="" id="" placeholder='Aditiyaa Kumar'/>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-2/4 h-10 p-3 rounded-md outline-none bg-slate-200 text-slate-900 invalid:text-red-600 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600' type="email" name="" id="" placeholder='baigan@gmail.com'/>
                        </div>
                        {/* Message Feild and Button */}
                        <div className='flex flex-col'>
                            <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} className='h-40 p-3 mb-3 rounded-md outline-none bg-slate-200 text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600' name="" id="" cols={30} rows={10} placeholder='Aditiya Kumar 6 class mai padhte hai...'/>
                            <button onClick={handleSubmit} className='border-2 h-10 rounded-md border-transparent bg-teal-300 text-slate-600 font-semibold hover:translate-x-1'>Send Message</button>
                        </div>
                    </form>
                </div>
            </>
        </div>
    )
}

export default FormComponent
