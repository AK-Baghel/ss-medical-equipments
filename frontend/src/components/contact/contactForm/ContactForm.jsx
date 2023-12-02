import React from 'react'
import "./style.css"

function ContactForm() {
    return (
        <div className="contactFormContainer">
            <div className="contactFormHeading">Contact Form</div>
            <input type="text" className="contactFormText" placeholder='Enter Your Full Name' />
            <input type="email" className="contactFormText" placeholder='Enter Your Email Addresss' />
            {/* <input type="phone" className="contactFormText" placeholder='Enter Your Phone Number' /> */}
            <input type="text" className="contactFormText" placeholder='Enter Your Address' />
            <textarea className='contactFormTextArea' placeholder='Enter Your Message' />
            <div className="contactFormButton">
                SUBMIT
            </div>
        </div>
    )
}

export default ContactForm