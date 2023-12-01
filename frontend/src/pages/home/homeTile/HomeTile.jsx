import React from 'react'
import "./style.css"


function HomeTile({ title, desc, logo }) {
    return (
        <div className="aboutTileContainer">
            <div className="aboutTileBox1">{logo}</div>
            <div className="aboutTileBox2">{title}</div>
            <div className="aboutTileBox3">{desc}</div>
        </div>
    )
}

export default HomeTile