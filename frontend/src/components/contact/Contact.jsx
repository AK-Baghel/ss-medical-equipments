import React from 'react'
import "./style.css"
import GoogleMap from './googleMap/GoogleMap'
import ContactForm from './contactForm/ContactForm'

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactContainerSection1 ">
                <div className="footerBox1 contactBox1">
                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Factory Address</div>
                        <div className="footerBox1SectionText contactText">VAMANI OVERSEAS PVT. LTD.
                            49th Mile Stone, Delhi – Mathura Highway,
                            Village : Prithla, Tehsil & Dist : Palwal 121 102,
                            Haryana [INDIA]</div>
                    </div>

                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Head Office</div>
                        <div className="footerBox1SectionText contactText">5-L/156, NIT Faridabad,
                            Haryana – 121001</div>
                    </div>

                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Showroom Address</div>
                        <div className="footerBox1SectionText contactText">India Exposition Mart Limited
                            C11/39, Second floor,
                            Knowledge Park-II,
                            Dist- Gautam Budh Nagar,
                            Greater Noida, UP – 201306</div>
                    </div>
                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">CONTACT US</div>
                        <div className="footerBox1SectionItems contactItems">
                            <div className="footerBox1SectionItem contactHover contactText">+919761932233</div>
                            <div className="footerBox1SectionItem contactHover contactText">pkapil@vamanioverseas.com</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="contactContainerSection2" />

            <div className="contactContainerSection3">

                <GoogleMap />
                <ContactForm />

            </div>

        </div>
    )
}

export default Contact