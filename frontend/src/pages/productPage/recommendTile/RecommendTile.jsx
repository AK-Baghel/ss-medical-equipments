import React, { useState, useEffect } from 'react'
import "./style.css"
import { IoClose } from "react-icons/io5"
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'

function RecommendTile({ id }) {

    const navigate = useNavigate();
    const [productData, setproductData] = useState("")

    const [showForm, setShowForm] = useState(false)
    const openPage = () => {
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    }



    const fetchProduct = async () => {
        try {
            const response = await fetch(`http://localhost:8080/uploadData/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setproductData(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [id])


    return (
        <div className="recommendTileContainer">
            <img className="recommendTileImg" src={`http://localhost:8080/${productData.image}`} alt="" />
            <div className="recommendTileText">{productData.name}</div>
            <div className="recommendTileDesc">
                {productData.desc}
            </div>
            <div className="recommendTileButtons">
                <div className="recommendTileButton" onClick={openPage}>Read More</div>
                <div className="recommendTileButton" onClick={() => { setShowForm(!showForm) }}>Enquire Now</div>
            </div>

            {
                showForm &&

                <>
                    <div className="enquireBlackContainer">

                        <div className="enquireContainer">

                            <div className="enquireSection1">
                                <div className="enquireSection1Text">ENQUIRE NOW</div>
                                <div className="enquireSection1Close">
                                    <IoClose className='formClose' onClick={() => { setShowForm(false) }} />
                                </div>
                            </div>
                            <div className="enquireSection2">
                                <div className="enquireSection2Image">
                                    <img className='enquireImage' src={`http://localhost:8080/${productData.image}`} alt="" />
                                    <div className="enquireTitle">{productData.name}</div>
                                </div>
                                <div className="enquireSection2Form">
                                    <Form id={id} />
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            }

        </div>
    )
}

export default RecommendTile