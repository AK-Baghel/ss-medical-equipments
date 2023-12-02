import React, { useState } from 'react'
import "./style.css"
import { IoClose } from "react-icons/io5"
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'

function RecommendTile() {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false)
    const openPage = (value) => {
        navigate(`/product/${value}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className="recommendTileContainer">
            <img className="recommendTileImg" src="https://images.jdmagicbox.com/quickquotes/images_main/mini-portable-oxygen-concentrator-2184655529-5ml65t7d.jpg" alt="" />
            <div className="recommendTileText">Oxygen Cylinder</div>
            <div className="recommendTileDesc">
                An Oxygen Cylinder is a non-reactive, high-pressure, seamless tempered steel container in which compressed oxygen gas is kept.
            </div>
            <div className="recommendTileButtons">
                <div className="recommendTileButton" onClick={() => { openPage('Digital BP Monitor ') }}>Read More</div>
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
                                    <img className='enquireImage' src="https://images.jdmagicbox.com/quickquotes/images_main/mini-portable-oxygen-concentrator-2184655529-5ml65t7d.jpg" alt="" />
                                    <div className="enquireTitle">Oxygen Chair</div>
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
    )
}

export default RecommendTile