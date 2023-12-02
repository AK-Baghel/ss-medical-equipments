import React from 'react'
import "./style.css"
import MarqueeComp from './marquee/MarqueeComp'
import TestimonialTile from './testimonial/TestimonialTile'

function About() {
    return (
        <div className="aboutUsContainer">
            <div className="aboutBanner">About Us</div>

            <div className="productPageBox2">

                <div className="productPageBox2Section1">

                    <div className="productPageBox2Section1Heading">
                        Who we are?
                    </div>

                    <div className="productPageBox2Section1Text">
                        Care Oxy- A leading and most trusted name in the market for offering the premium quality of health care services and related equipment. Established in the year 2015, Care Oxy has gained a lot of reputation by the esteemed clients for offering the best possible services at the comfort of their place. We are counted in Top 10 Best Home Nursing Services in Delhi. If you are seeking for the medical equipment on rent or purchase or want to avail our excellent health care services then you can rely on us. With immense experience and well-trained professionals we have become the leading choice of people. We always ensure to provide the world-class medical equipment and services at the most affordable pricing
                    </div>

                    <div className="productPageBox2Section1Heading">
                        Summary
                    </div>

                    <div className="productPageBox2Section1Text">
                        Under the leadership of Mr. Naresh Dhakad, the Director of the Company, We and our Medical Staff At Home, able to carved a niche in this industry and our main aim is to provide quality healthcare services and Trained Medical Staff At Home next to your home. We are equipped with the expert team of staff, well trained Medical Caretaker and healthcare professionals who stay updated with latest technology to provide the best possible medical equipment and best possible services at the customer convenience. We also provides Medical Caretaker Jobs. Our special care unit strives to deliver the unbeatable experience by providing the highly effective medical equipment and home health care services to all the patients and always ensure to offer full satisfaction which enables them to become healthy and happy again.
                    </div>

                </div>

                <div className="productPageBox2Section2">
                    <img className='productImage' src="https://cdn.create.vista.com/api/media/small/34554031/stock-photo-medical-doctor-with-tablet-pc-portrait" onClick={() => { setShowForm(!showForm) }} alt="" />
                    {/* <div className="imgDataBoxButton" onClick={() => { setShowForm(!showForm) }}>Enquire Now</div> */}
                </div>

            </div>

            <MarqueeComp />

            {/* <div className="checkingTime">
                <TestimonialTile />
                <TestimonialTile />
                <TestimonialTile />
                <TestimonialTile />
                <TestimonialTile />
                <TestimonialTile />
            </div> */}

        </div>
    )
}

export default About