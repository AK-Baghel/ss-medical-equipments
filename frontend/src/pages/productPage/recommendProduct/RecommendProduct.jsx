import React, { useState, useEffect } from 'react'
import RecommendTile from '../recommendTile/RecommendTile'
import "./style.css"

function RecommendProduct() {

    const [uploadedData, setUploadedData] = useState([]);

    const fetchProductData = async () => {
        try {
            const response = await fetch('http://localhost:8080/uploadData');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setUploadedData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    return (
        <div className="recommendProductContainer">
            <div className="recommendProductBanner">SS Medical Equipments</div>
            <div className="recommendProductBox">
                {
                    uploadedData.map((value) => {
                        return (
                            <RecommendTile id={value._id} key={value._id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecommendProduct