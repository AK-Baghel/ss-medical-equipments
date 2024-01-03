import React, { useState } from 'react'
import "./style.css"

function Form({ id }) {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="formContainer">
            <input type="text" className="formText" placeholder='Enter Your Full Name' />
            <input type="email" className="formText" placeholder='Enter Your Email Addresss' />
            <input type="phone" className="formText" placeholder='Enter Your Phone Number' />
            <input type="text" className="formText" placeholder='Enter Your Address' />

            <select value={selectedOption} className='formText' onChange={handleSelectChange}>
                <option value="">Select Your Querry</option>
                <option value="Rent">Rent</option>
                <option value="Purchase">Purchase</option>
            </select>

            <textarea className='formTextArea' placeholder='Enter Your Message' />

            <div className="formButton">
                SUBMIT
            </div>
        </div>
    )
}

export default Form