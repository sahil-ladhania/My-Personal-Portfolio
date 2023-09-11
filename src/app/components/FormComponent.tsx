import React from 'react'

const FormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <form action="">
                        <h1>Contact Me Form</h1>
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder='Enter Name'/>
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" placeholder='Enter Email'/>
                        <label htmlFor="">Your Message</label>
                        <input type="text" name="" id="" placeholder='Your Message'/>
                        <button>Send Message</button>
                    </form>
                </div>
            </>
        </div>
    )
}

export default FormComponent
