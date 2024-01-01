import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";

import "./style.css"

function AddProducts() {
    const navigate = useNavigate();

    const [image, setimage] = useState("")
    const [name, setname] = useState("")
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const addHandle = async () => {

        const data = await fetch("http://localhost:8080/productData", {
            method: "post",
            body: JSON.stringify({ image: 'hello', name, title, desc }),
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

    return (
        <div className='masterContainer appRight'>
            <div className="masterBox1">Add Products</div>
            <div className="masterHeaderBox2">
                <div className="masterHeaderBox2Sec1">Add New Prodcut </div>
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Red  " onClick={() => { navigate(`/dashboard/product`) }}>Back</div>
            </div>
            <div className="addHeaderSection">

                <div className="uploadBox">
                    <FaCloudUploadAlt className='uploadIcon' />
                    {/* <input type="file" id="file-input" name="file-input" value={image} onChange={(e) => { setimage(e.target.value) }} /> */}
                    <label id="file-input-label" htmlFor="file-input">Upload Image</label>
                </div>

                <input type='text' className="addHeaderBox1Input" placeholder={`Enter Product Name`} value={name} onChange={(e) => { setname(e.target.value) }} />
                <input type='text' className="addHeaderBox1Input" placeholder={`Enter Product Title`} value={title} onChange={(e) => { settitle(e.target.value) }} />
                <input type='text' className="addHeaderBox1Input" placeholder={`Enter Product Description`} value={desc} onChange={(e) => { setdesc(e.target.value) }} />
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Green" onClick={addHandle} >{`Add Product`} </div>
            </div>
        </div>
    )
}

export default AddProducts