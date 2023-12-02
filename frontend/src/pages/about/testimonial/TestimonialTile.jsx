import React from 'react'
import "./style.css"
import { AiFillStar } from "react-icons/ai"
import { FaQuoteLeft } from "react-icons/fa"

function TestimonialTile() {
    return (
        <div className="testimonialTileContainer">
            <div className="testimonialTileDesc">Ipsam, optio praesentium laboriosam itaque asda, velit dolorem, vitae quos quisquam ex totam magni tempora in odit asmahs.</div>

            {/* <div className="triangle-down"></div> */}

            <div className="testimonialTileBox">
                <div className="testimonialTileBox1">
                    <div className="testimonialTileColons"><FaQuoteLeft /></div>
                    <img className="testimonialTileImg" src='https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701475200&semt=sph' alt="" />
                </div>

                <div className="testimonialTileBox2">
                    <div className="testimonialTileName">Client Name</div>
                    <div className="testimonialTileProfession">Profession</div>
                    <div className="testimonialTileStars">
                        <AiFillStar className='testimonialTileStar' />
                        <AiFillStar className='testimonialTileStar' />
                        <AiFillStar className='testimonialTileStar' />
                        <AiFillStar className='testimonialTileStar' />
                        <AiFillStar className='testimonialTileStar' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestimonialTile