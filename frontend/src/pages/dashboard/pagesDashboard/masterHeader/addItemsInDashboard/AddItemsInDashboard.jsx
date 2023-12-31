import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css"

function AddItemsInDashboard() {
    const navigate = useNavigate();
    const { title } = useParams();


    const [selectedOption, setSelectedOption] = useState('');
    const [inputText, setInputText] = useState("")

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const inputHandle = (e) => {
        setInputText(e.target.value);
    }


    return (
        <div className='masterContainer appRight'>
            <div className="masterBox1">{`Add ${title}`}</div>
            <div className="masterHeaderBox2">
                <div className="masterHeaderBox2Sec1">{`Add New ${title}`} </div>
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Red  " onClick={() => { navigate(`/dashboard/ ${title}`) }}>Back</div>
            </div>
            <div className="addHeaderSection">

                {
                    title === "category" ?
                        <>
                            <select value={selectedOption} className='addItemSelect' onChange={handleSelectChange}>
                                <option value="">---Select Header---</option>
                                <option value="Home">Home</option>
                                <option value="About">About</option>
                                <option value="Contact">Contact</option>
                            </select>
                        </> :
                        title === "sub category" ?
                            <>
                                <select value={selectedOption} className='addItemSelect' onChange={handleSelectChange}>
                                    <option value="">---Select Category---</option>
                                    <option value="Fabric">Fabric</option>
                                    <option value="ColorSize">Color</option>
                                    <option value="Size">Size</option>
                                </select>
                            </> :
                            ""
                }

                <input type='text' value={inputText} className="addHeaderBox1Input" placeholder={`Enter ${title} Name`} onChange={inputHandle} />
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Green " onClick={() => { console.log(selectedOption, inputText); navigate(`/dashboard/ ${title}`) }}>{`Add ${title}`} </div>
            </div>
        </div>
    )
}

export default AddItemsInDashboard