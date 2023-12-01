import React, { useState } from 'react'
import "./style.css"
import { IoClose } from "react-icons/io5"
import Form from '../../components/form/Form'
import { useParams } from 'react-router-dom'


function ProductPage() {

    const [showForm, setShowForm] = useState(false)
    const { title } = useParams();

    return (
        <div className="productPageContainer">
            <div className="aboutBanner">{title}</div>

            <div className="productPageSection1">

                <div className="aboutTransText">
                    {title}
                </div>

                <div className="productPageBox2">

                    <div className="productPageBox2Section1">
                        <div className="productPageBox2Section1Text">
                            The oxygen concentrator works in a very simple way. It is used to provide clear oxygen to the patients. We deliver an Oxygen Concentrator on Rent in Delhi  with delivery at your doorsteps. You can order your concentrator now and we will deliver it to you since you are our esteemed patrons.
                        </div>
                        <div className="productPageBox2Section1Heading">
                            How does it Work?
                        </div>
                        <div className="productPageBox2Section1Text">
                            The concentrator pulled in the oxygen and compresses filtered air and then deliver it to the patients. It removes nitrogen and other impurities present in the air making it breathable for the patient. It is a basic way of providing oxygen to the patients as well as valuable for them. Our portable concentrators allow you to take it with you when you are on the go.
                        </div>
                        <div className="productPageBox2Section1Heading">
                            Our Concentrator
                        </div>
                        <div className="productPageBox2Section1Text">
                            We provide high-quality equipment and our concentrators are convenient non-stop flow with pulse mode sleep mode options. It weighs less and are easily portable. To buy our Oxygen Concentrator 5L/10L in Delhi, you can visit our website and buy them within affordable prices.
                        </div>
                    </div>

                    <div className="productPageBox2Section2">
                        <img className='productImage' src="https://images.jdmagicbox.com/quickquotes/images_main/mini-portable-oxygen-concentrator-2184655529-5ml65t7d.jpg" onClick={() => { setShowForm(!showForm) }} alt="" />
                        <div className="imgDataBoxButton" onClick={() => { setShowForm(!showForm) }}>Enquire Now</div>
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
                                        <img className='enquireImage' src="https://images.jdmagicbox.com/quickquotes/images_main/mini-portable-oxygen-concentrator-2184655529-5ml65t7d.jpg" alt="" />
                                        <div className="enquireTitle">{title}</div>
                                    </div>
                                    <div className="enquireSection2Form">
                                        <Form />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </>
                }


            </div>


        </div>
    )
}

export default ProductPage