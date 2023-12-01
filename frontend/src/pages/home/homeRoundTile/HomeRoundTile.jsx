import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function HomeRoundTile({ title, desc, logo }) {
    const navigate = useNavigate();
    return (
        <div className="homeRoundTileContainer">
            <div className="homeRoundTileBox1">{logo}</div>
            <div className="homeRoundTileBox2">{title}</div>
            <div className="homeRoundTileBox3" onClick={() => { navigate(`/product/${title}`); window.scrollTo(0, 0); }}>{desc}</div>
        </div>
    )
}

export default HomeRoundTile

