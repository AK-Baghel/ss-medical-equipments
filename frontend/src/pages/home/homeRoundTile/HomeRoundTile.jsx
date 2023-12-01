import React from 'react'
import "./style.css"

function HomeRoundTile({ title, desc, logo }) {
    return (
        <div className="homeRoundTileContainer">
            <div className="homeRoundTileBox1">{logo}</div>
            <div className="homeRoundTileBox2">{title}</div>
            <div className="homeRoundTileBox3">{desc}</div>
        </div>
    )
}

export default HomeRoundTile

