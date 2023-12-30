import React from 'react'
import "./style.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function MasterHeader() {

    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='masterContainer appRight'>
            <div className="masterBox1">HEADER</div>
            <div className="masterHeaderBox2">
                <div className="masterHeaderBox2Sec1">Header List </div>
                <div className="masterHeaderBox2Sec2">Add New</div>
            </div>

            <div className="masterHeaderBox3">

                <div className="masterHeaderBox3Th">
                    <div className="masterHeaderBox3ThItem1">#</div>
                    <div className="masterHeaderBox3ThItem2">Header Items</div>
                    <div className="masterHeaderBox3ThItem3">Action</div>
                </div>

                {
                    data.map((value, index) => {
                        return (
                            <div className="masterHeaderBox3Th " key={index}>
                                <div className="masterHeaderBox3ThItem1 masterHeaderBox3Tr">{value}</div>
                                <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">Home</div>
                                <div className="masterHeaderBox3ThItem3 masterHeaderBox3Tr masterHeaderBox3Action ">
                                    <FaEdit className='masterHeaderEdit' />
                                    <MdDelete className='masterHeaderDelete' />
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default MasterHeader