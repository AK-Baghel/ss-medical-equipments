import React from "react";
import Marquee from "react-fast-marquee";
import "./style.css"
import TestimonialTile from "../testimonial/TestimonialTile";

function MarqueeComp() {
    return (
        <div className="marqueeContainer">
            <Marquee pauseOnHover={true} speed={100} autoFill={true} className="marquee" gradient={true} gradientWidth={20} >
                <TestimonialTile />
                <TestimonialTile />
                <TestimonialTile />
            </Marquee>
        </div>
    )
}

export default MarqueeComp