import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import HomeSection1 from './homeSection1/HomeSection1'
import HomeTile from './homeTile/HomeTile'
import HomeRoundTile from './homeRoundTile/HomeRoundTile'

import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { TbDeviceImacHeart } from "react-icons/tb";

import "./style.css"
import ImgDataBox from './imgDataBox/ImgDataBox'

function Home() {
    return (
        <>
            <Carousel />
            <HomeSection1 />

            <div className="aboutTiles">
                <HomeTile title={"HealthCare Professionals"} desc={"We are equipped with the expert team of healthcare professionals who take care of the patient in the comfort of your home."} logo={<FaUserDoctor />} />
                <HomeTile title={"Medical Excellence"} desc={"Get quality healthcare at your home. We deliver medical excellence with compassion and care by offering medical equipment on rent."} logo={<FaHandHoldingMedical />} />
                <HomeTile title={"Latest Technologies"} desc={"We stay updated with the advanced technologies to manufacture and deliver the best possible medical equipment on rent."} logo={<TbDeviceImacHeart />} />
            </div>

            <div className="aboutTrans">
                <div className="aboutTransText">OUR SERVICES</div>
                {/* <div className="aboutTransDesc">Openness with our clients. You raise issues and we provide solutions promptly. Transparency means providing context for the decisions we are making. Transparency helps us to eliminate any suspicious or anxieties of our customers might have about the value of what we are offering. By laying about the truth about our product and services.</div> */}


                <div className="aboutTiles2">
                    <HomeRoundTile title={"Oxygen Concentrator"} desc={"Read More"} logo={<FaUserDoctor />} />
                    <HomeRoundTile title={"Wheel Chair"} desc={"Read More"} logo={<FaHandHoldingMedical />} />
                    <HomeRoundTile title={"Suction Apparatus"} desc={"Read More"} logo={<TbDeviceImacHeart />} />
                    <HomeRoundTile title={"Suction Apparatus"} desc={"Read More"} logo={<TbDeviceImacHeart />} />
                </div>


                <div className="homeButton">
                    <div className='viewAll'>View All</div>
                </div>

            </div>

            <ImgDataBox />

        </>
    )
}

export default Home