import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./style.css"
import { useNavigate } from 'react-router-dom';

function MasterProductDisplay() {
    const navigate = useNavigate();

    const [uploadedData, setUploadedData] = useState([]);

    const fetchProductData = async () => {
        try {
            const response = await fetch('http://localhost:8080/uploadData');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setUploadedData(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id, image) => {
        try {
            const response = await fetch(`http://localhost:8080/uploadData/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete data');
            }

            if (image) {
                console.log('Image deleted:', image);
            }

            fetchProductData();

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [])

    return (
        <div className='masterContainer appRight'>
            <div className="masterBox1">Products</div>
            <div className="masterHeaderBox2">
                <div className="masterHeaderBox2Sec1">{`Products List`}</div>
                <div className="masterHeaderBox2Sec2" onClick={() => { navigate("/dashboard/addproduct") }}>Add New</div>
            </div>

            <div className="masterHeaderBox3">

                <div className="masterHeaderBox3Th">
                    <div className="masterHeaderBox3ThItem1">#</div>
                    <div className="masterHeaderBox3ThItem2">Image</div>
                    <div className="masterHeaderBox3ThItem2">Name</div>
                    <div className="masterHeaderBox3ThItem2">Title</div>
                    <div className="masterHeaderBox3ThItem2">Description</div>
                    <div className="masterHeaderBox3ThItem3">Action</div>
                </div>


                <div className="masterHeaderBox3TrParent">

                    {
                        uploadedData.map((value, index) => {
                            return (
                                <>
                                    <div className="masterHeaderBox3Th" key={value._id}>
                                        <div className="masterHeaderBox3ThItem1 masterHeaderBox3Tr masterProductTr">{index + 1}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">
                                            <a href={`http://localhost:8080/${value.image}`} target='_blank'>
                                                {value.image && (
                                                    <img src={`http://localhost:8080/${value.image}`} alt="Uploaded" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                                                )}

                                            </a>
                                        </div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.name}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.title}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.desc}</div>
                                        <div className="masterHeaderBox3ThItem3 masterHeaderBox3Tr masterProductTr masterHeaderBox3Action ">
                                            <FaEdit className='masterHeaderEdit' />
                                            <MdDelete className='masterHeaderDelete' onClick={() => handleDelete(value._id, value.image)} />
                                        </div >
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default MasterProductDisplay