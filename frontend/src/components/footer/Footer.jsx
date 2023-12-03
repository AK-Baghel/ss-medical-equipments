import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
    const scrollPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <footer className="footerContainer">
            <div className="footerBox1">
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">Head Office</div>
                    <div className="footerBox1SectionText">78-8asg HAYUAS mniah ASYH India</div>
                </div>
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">Links</div>
                    <div className="footerBox1SectionItems">
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/product/Wheel Chair"); scrollPage(); }} >Wheel Chair</div>
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/product/Suction Apparatus"); scrollPage(); }} >Suction Apparatus</div>
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/product/Recliner Chair"); scrollPage(); }} >Recliner Chair</div>
                        {/* <div className="footerBox1SectionItem" onClick={() => { navigate("/about") }} >Sustainability</div> */}
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/product/Portable Suction Machine"); scrollPage(); }} >Portable Suction Machine</div>
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/items"); scrollPage(); }} >View All Items</div>
                    </div>
                </div>
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">FACTORY ADDRESS</div>
                    <div className="footerBox1SectionText">nasdu asud  HU asd YTA S DSU  usdg Yg sgdbsu [INDIA]</div>
                </div>
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">CONTACT US</div>
                    <div className="footerBox1SectionItems">
                        <div className="footerBox1SectionItem">+9127912320139</div>
                        <div className="footerBox1SectionItem">xysgas@gmials.com</div>
                    </div>
                </div>
            </div>
            <div className="footerBox2"></div>
            <div className="footerBox3">
                <div className="footerBox3Text">
                    Copyright © SS Medical Equipments. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer