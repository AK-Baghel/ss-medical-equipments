import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./style.css"
import { useNavigate } from 'react-router-dom';

function MasterProductDisplay() {
    const navigate = useNavigate();
    const [productArray, setproductArray] = useState([])

    const productArr = async () => {
        const data = await fetch("http://localhost:8080/productData");
        const result = await data.json();
        setproductArray(result);
    }

    useEffect(() => {
        productArr();
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
                        productArray.map((value, index) => {
                            return (
                                <>
                                    <div className="masterHeaderBox3Th" key={index}>
                                        <div className="masterHeaderBox3ThItem1 masterHeaderBox3Tr masterProductTr">{index + 1}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.image}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.name}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.title}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterProductTr">{value.desc}</div>
                                        <div className="masterHeaderBox3ThItem3 masterHeaderBox3Tr masterProductTr masterHeaderBox3Action ">
                                            <FaEdit className='masterHeaderEdit' />
                                            <MdDelete className='masterHeaderDelete' />
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