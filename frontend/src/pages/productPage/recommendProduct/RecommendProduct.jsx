import React from 'react'
import RecommendTile from '../recommendTile/RecommendTile'
import "./style.css"

function RecommendProduct() {
    return (
        <div className="recommendProductContainer">
            <div className="recommendProductBanner">SS Medical Equipments</div>
            <div className="recommendProductBox">
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
                <RecommendTile />
            </div>
        </div>
    )
}

export default RecommendProduct