import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FaHome } from "react-icons/fa"
import { FaTasks } from "react-icons/fa"
import { FaShieldAlt } from "react-icons/fa"
import { PiBagFill } from "react-icons/pi"
import { BsFillGearFill } from "react-icons/bs"
import { BiSolidCylinder } from "react-icons/bi"
import { AiFillLike } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"

import "./style.css"

function DMenu() {

    const navigate = useNavigate();

    return (
        <div className="menuContainer">
            <div className="menuBox1">
                <img className='menuImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRg61kc6vPiirZWJyd1lJ8Zf60uPa4Nlht6A&usqp=CAU" alt="" />
                <div className="menuName">Virat Kholi</div>
            </div>
            <div className="menuLine"></div>
            <div className="menuLists">
                <div className={`menuList ${location.pathname === "/dashboard/master" ? "menuListActive" : ""}`} onClick={() => { navigate("/dashboard/master") }}><FaHome />Master</div>
                {/* <div className="menuList"><FaTasks />My Tasks<RiArrowDropDownLine /></div> */}
                <div className={`menuList ${location.pathname === "/dashboard/header" ? "menuListActive" : ""}`} onClick={() => { navigate("/dashboard/header") }}><FaShieldAlt />Header</div>
                <div className="menuList"><PiBagFill />Job Profile</div>
                <div className="menuList"><BiSolidCylinder />Induction</div>
                <div className="menuList"><BsFillGearFill />Utilities<RiArrowDropDownLine /></div>
                <div className="menuList"><AiFillLike />Suggestion</div>
            </div>
            <footer className='menuFooter'>
                <div className="menuLine"></div>
                <div className="menuFooterText">
                    &copy;2019 Vamani Overseas Pvt Ltd
                </div>
            </footer>
        </div>
    )
}

export default DMenu