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
                        <div className="footerBox1SectionText contactText">xyz ahsgdb asjhdsd
                            asdhsaudsadhasdas
                            dsadgsadksjhd sdusa dsa
                            a sidashdsad sadsia
                            asdsdsadsadsdsd
                        </div>
                    </div>

                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Head Office</div>
                        <div className="footerBox1SectionText contactText">jay sdyasd as9d asds
                            nasdhusad 423432478</div>
                    </div>

                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Showroom Address</div>
                        <div className="footerBox1SectionText contactText">ajshdiasdusa asdsdsadsadsdsda
                            sdjhfdf dfsfd sfosif
                            sdhfs dfsdufd fdsf
                            ksd fdsofd fsf
                            sdfiud fdsfd sfosif
                        </div>
                    </div>
                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">CONTACT US</div>
                        <div className="footerBox1SectionItems contactItems">
                            <div className="footerBox1SectionItem contactHover contactText">+91234567890</div>
                            <div className="footerBox1SectionItem contactHover contactText">xyz@gmaial.com</div>
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