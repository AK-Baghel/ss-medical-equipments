import React from 'react'
import "./style.css"

function Form() {
    return (
        <div className="formContainer">
            <input type="text" className="formText" placeholder='Enter Your Full Name' />
            <input type="email" className="formText" placeholder='Enter Your Email Addresss' />
            <input type="phone" className="formText" placeholder='Enter Your Phone Number' />
            <input type="text" className="formText" placeholder='Enter Your Address' />
            <textarea className='formTextArea' placeholder='Enter Your Message' />
            <div className="formButton">
                SUBMIT
            </div>
        </div>
    )
}

export default Form