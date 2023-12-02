import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function ImgDataBox() {
    const navigate = useNavigate();
    return (
        <>
            <div className="imgDataBoxContainer">
                <div className="imgDataBoxImageBox">
                    <img className='imgDataBoxImage' src={'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/QIAQ9Rd/videoblocks-doctor-with-medical-kit-talking-4k-video-animated_sw9e4iuiu_thumbnail-1080_01.png'} alt="" />
                </div>
                <div className="imgDataBoxSection">
                    <div className="imgDataBoxTitle">About SS Medical Equipments</div>
                    <div className="imgDataBoxDesc">SS Medical Equipments - A leading and most trusted name in the market for offering the premium quality of health care services and related equipment. Established in the year 2015, Care Oxy has gained a lot of reputation by the esteemed clients for offering the best possible services at the comfort of their place. We are counted in Top 10 Best Home Nursing Services in Delhi. If you are seeking for the medical equipment on rent or purchase or want to avail our excellent health care services then you can rely on us. With immense experience and well-trained professionals we have become the leading cho...</div>
                    <div className="imgDataBoxButton" onClick={() => { navigate('/about'); window.scrollTo(0, 0) }}>Read More</div>
                </div>
            </div>
        </>
    )
}

export default ImgDataBox