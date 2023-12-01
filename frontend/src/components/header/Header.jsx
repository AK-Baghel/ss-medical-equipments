import React, { useState, useEffect } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import { RiArrowDropDownLine } from "react-icons/ri"

import logo from "../../assets/logo.jpg"

import { IoClose } from "react-icons/io5"
// import { MdGTranslate } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
// import Translate from "../translate/Translate"

const Header = () => {

    const location = useLocation();
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);
    // const [translateShow, setTranslateShow] = useState(false)


    const toggleBar = () => {
        setShow(!show);
    }
    const navigate = useNavigate();

    const routing = (para) => {
        navigate(para);
        setShow(true)
        setPopUp(false)
    }


    return (
        <div className="headerContainer">
            <div className="headerItems" >

                <div className="headerLogo" onClick={() => { routing("/") }}>
                    <img className="headerLogoImg" src={logo} alt="" />
                    {/* <div className="headerLogoImg">Medical</div> */}
                </div>

                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>



                    <div className="headerRight">

                        <div className={`headerItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>HOME</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/about" ? "active" : ""}`} onClick={() => { routing("/about") }} >ABOUT US</div>

                        <div className="headerItem headerDrop" onClick={() => { setPopUp(!popUp) }} onMouseOver={() => { setPopUp(true) }} onMouseOut={() => { setPopUp(false) }}>MEDICAL EQUIPMENT ON RENT<RiArrowDropDownLine className="headerDropDown" /></div>
                        {
                            popUp &&
                            <div className="headerPopUpBox" onMouseOver={() => { setPopUp(true) }} onMouseOut={() => { setPopUp(false) }}>
                                <ul className="headerPopUpBoxItems">
                                    <li className="headerPopUpBoxItem ">Oxygen Concentrator</li>
                                    <li className="headerPopUpBoxItem">Wheel Chair</li>
                                    <li className="headerPopUpBoxItem">ICU Bed Fully Automatic</li>
                                    <li className="headerPopUpBoxItem">Suction Appartaus</li>
                                    <li className="headerPopUpBoxItem">Digital BP Monitor/Machine</li>
                                    <li className="headerPopUpBoxItem">I.V. Stand</li>
                                    <li className="headerPopUpBoxItem">Oxygen Cylinder</li>
                                    <li className="headerPopUpBoxItem">Portable Suction Machine</li>
                                    <li className="headerPopUpBoxItem">DVT Pump</li>
                                    <li className="headerPopUpBoxItem">Air Mattress</li>
                                    <li className="headerPopUpBoxItem">CPAP Machine</li>
                                    <li className="headerPopUpBoxItem">Manual Bed</li>
                                    <li className="headerPopUpBoxItem">ICU Monitor</li>
                                    <li className="headerPopUpBoxItem">BIPAP Monitor</li>
                                    <li className="headerPopUpBoxItem">Recliner Chair</li>
                                    <li className="headerPopUpBoxItem">Chest Vibrator</li>
                                    <li className="headerPopUpBoxItem">Commode Chair</li>

                                </ul>
                            </div>
                        }

                        {/* <div className={`headerItem hoverUnderline ${location.pathname === "/medical-equipments" ? "active" : ""}`} onClick={() => { routing("/medical-equipments") }} >MEDICAL EQUIPMENT ON RENT</div> */}
                        <div className={`headerItem hoverUnderline ${location.pathname === "/gallery" ? "active" : ""}`} onClick={() => { routing("/gallery") }} >GALLERY</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => { routing("/contact") }} >CONTACT US</div>

                    </div>
                </div>



            </div>
            {
                show ? <FaBars className="headerBar" onClick={toggleBar} /> : <IoClose className=" headerBar headerCross" onClick={toggleBar} />
            }

        </div>
    )
}
export default Header;