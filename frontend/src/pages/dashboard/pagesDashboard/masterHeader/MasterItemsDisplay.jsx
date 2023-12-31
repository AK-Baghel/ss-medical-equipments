import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css"



function MasterItemsDisplay() {
    const navigate = useNavigate();

    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    let { title } = useParams();

    return (
        <div className='masterContainer appRight'>
            <div className="masterBox1">{title}</div>
            <div className="masterHeaderBox2">
                <div className="masterHeaderBox2Sec1">{`${title} List`}</div>
                <div className="masterHeaderBox2Sec2" onClick={() => { navigate(`/dashboard/add/${title}`) }}>Add New</div>
            </div>

            <div className="masterHeaderBox3">

                <div className="masterHeaderBox3Th">
                    <div className="masterHeaderBox3ThItem1">#</div>
                    {
                        title === 'category' ?
                            <div className="masterHeaderBox3ThItem2">Header</div> :
                            title === "sub category" ?
                                <div className="masterHeaderBox3ThItem2">Category</div> :
                                ""
                    }
                    <div className="masterHeaderBox3ThItem2">{`${title}`}</div>
                    <div className="masterHeaderBox3ThItem3">Action</div>
                </div>


                <div className="masterHeaderBox3TrParent">
                    {
                        data.map((value, index) => {
                            return (
                                <div className="masterHeaderBox3Th " key={index}>
                                    <div className="masterHeaderBox3ThItem1 masterHeaderBox3Tr">{value}</div>
                                    {
                                        title === 'category' ?
                                            <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">Header</div> :
                                            title === "sub category" ?
                                                <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">Category</div> :
                                                ""
                                    }
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
        </div>
    )
}

export default MasterItemsDisplay