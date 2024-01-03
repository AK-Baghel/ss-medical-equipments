import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";

import "./style.css"

function AddProducts() {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [name, setname] = useState("")
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const [fileAlertShow, setfileAlertShow] = useState(false)


    const handleFileChange = (e) => {
        // console.log(file);
        setFile(e.target.files[0]);
        // console.log(file, "sfsyhbfshivhdb");

        // if (!file || file.size > 500000) {
        //     setfileAlertShow(true); // Show an alert for exceeding file size
        // } else {
        //     setfileAlertShow(false); // Hide the alert
        // }
    }

    const handleUpload = async (e) => {

        if (!(file && name && title && desc)) {
            console.log("Empty data can't be insert....");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('photo', file);
        formDataToSend.append('name', name);
        formDataToSend.append('title', title);
        formDataToSend.append('desc', desc);

        try {
            const response = await fetch('http://localhost:8080/uploadData', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error('Failed to add data');
            }

            setFile("")
            setname("")
            settitle("")
            setdesc("")

            console.log('Data added successfully!');

        } catch (error) {
            console.error(error);
        }

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
                    <input type="file" id="file-input" name="file-input" accept='image/' onChange={handleFileChange} />
                    <label id="file-input-label" htmlFor="file-input">Upload Image</label>
                    <div className="uploadBoxAlert">Size of Image should be less than 500KB</div>
                    {
                        fileAlertShow ?
                            <div className="uploadBoxAlertRed">Size of Image is Greater than 500KB</div>
                            :
                            ""
                    }
                </div>

                <input type='text' className="addHeaderBox1Input" placeholder={`Enter Product Name`} value={name} onChange={(e) => { setname(e.target.value) }} />
                <input type='text' className="addHeaderBox1Input" placeholder={`Enter Product Title`} value={title} onChange={(e) => { settitle(e.target.value) }} />
                <input type='text' className="addHeaderBox1Input" placeholder={`Enter Product Description`} value={desc} onChange={(e) => { setdesc(e.target.value) }} />
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Green" onClick={handleUpload} >{`Add Product`} </div>
            </div>
        </div>
    )
}

export default AddProducts