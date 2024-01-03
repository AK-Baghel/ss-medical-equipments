import React, { useEffect, useState } from 'react'
import "./style.css"
import { IoClose } from "react-icons/io5"
import Form from '../../components/form/Form'
import { useParams } from 'react-router-dom'
import RecommendProduct from './recommendProduct/RecommendProduct'
import RecommendTile from './recommendTile/RecommendTile'

import { useNavigate } from 'react-router-dom'


function ProductPage() {

    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false)
    const [productData, setproductData] = useState("")
    const [uploadedData, setUploadedData] = useState([]);
    const [randomData, setRandomData] = useState([]);
    const { id } = useParams();


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


    async function fetchRandomData() {
        try {
            const response = await fetch('http://localhost:8080/randomProducts');
            const data = await response.json();
            setRandomData(data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchProductData();
        fetchRandomData();
    }, [])


    useEffect(() => {
        console.log(randomData, "vgygcgy");
    }, [randomData])

    return (
        <div className="productPageContainer">
            <div className="aboutBanner">{productData.name}</div>

            <div className="productPageSection1">

                <div className="aboutTransText">
                    {productData.name}
                </div>

                <div className="productPageBox2">

                    <div className="productPageBox2Section1">
                        {/* <div className="productPageBox2Section1Text">
                            The oxygen concentrator works in a very simple way. It is used to provide clear oxygen to the patients. We deliver an Oxygen Concentrator on Rent in Delhi  with delivery at your doorsteps. You can order your concentrator now and we will deliver it to you since you are our esteemed patrons.
                        </div> */}
                        <div className="productPageBox2Section1Heading">
                            {productData.title}
                        </div>
                        <div className="productPageBox2Section1Text">
                            {productData.desc}
                        </div>
                        {/* <div className="productPageBox2Section1Heading">
                            Our Concentrator
                        </div>
                        <div className="productPageBox2Section1Text">
                            We provide high-quality equipment and our concentrators are convenient non-stop flow with pulse mode sleep mode options. It weighs less and are easily portable. To buy our Oxygen Concentrator 5L/10L in Delhi, you can visit our website and buy them within affordable prices.
                        </div> */}
                    </div>

                    <div className="productPageBox2Section2">
                        <img className='productImage' src={`http://localhost:8080/${productData.image}`} onClick={() => { setShowForm(!showForm) }} alt="" />
                        <div className="imgDataBoxButton" onClick={() => { setShowForm(!showForm) }}>Enquire Now</div>
                    </div>

                </div>

                <div className="youMayLike">You May Also Like</div>

                <div className="productPageBox3">
                    {
                        randomData.map((value, index) => {
                            return (
                                <RecommendTile id={value._id} key={index} />
                            )
                        })
                    }

                </div>

                <div className="homeButton">
                    <div className='viewAll' onClick={() => { navigate('/items'); window.scrollTo(0, 0) }}>View All Items</div>
                </div>

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

export default ProductPage