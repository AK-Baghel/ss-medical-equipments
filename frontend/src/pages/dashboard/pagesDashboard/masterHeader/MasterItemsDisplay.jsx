import React, { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css"



function MasterItemsDisplay() {
    const navigate = useNavigate();
    const [headerArray, setheaderArray] = useState([])
    const [categoryArray, setcategoryArray] = useState([])
    const [subCategoryArray, setsubCategoryArray] = useState([])
    const [array, setarray] = useState([])

    let { title } = useParams();

    const headerArr = async () => {
        try {
            const data = await fetch("http://localhost:8080/headerData");
            const result = await data.json();
            setheaderArray(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const categoryArr = async () => {
        try {
            const data = await fetch("http://localhost:8080/categoryData");
            const result = await data.json();
            setcategoryArray(result);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const subCategoryArr = async () => {
        try {
            const data = await fetch("http://localhost:8080/subCategoryData");
            const result = await data.json();
            setsubCategoryArray(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        headerArr();
        categoryArr();
        subCategoryArr();
    }, []);

    let newArr = title === 'header' ? headerArray : title === 'category' ? categoryArray : subCategoryArray;

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
                        newArr.map((value, index) => {
                            return (
                                <div className="masterHeaderBox3Th " key={index}>
                                    <div className="masterHeaderBox3ThItem1 masterHeaderBox3Tr">{index + 1}</div>
                                    <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{title === 'header' || title === 'category' ? value.header : value.category}</div>
                                    {
                                        title === 'category' ?
                                            <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.category}</div> :
                                            title === "sub category" ?
                                                <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.subCategory}</div> :
                                                ""
                                    }
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