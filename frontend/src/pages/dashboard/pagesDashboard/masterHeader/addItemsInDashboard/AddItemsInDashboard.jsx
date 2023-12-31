import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css"

function AddItemsInDashboard() {
    const navigate = useNavigate();
    const { title } = useParams();
    const [headerArray, setheaderArray] = useState([])
    const [categoryArray, setcategoryArray] = useState([])


    const [selectedOption, setSelectedOption] = useState('');
    const [inputText, setInputText] = useState("")

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const inputHandle = (e) => {
        setInputText(e.target.value);
    }

    const addHandle = async () => {

        if (title === 'header') {
            const data = await fetch("http://localhost:8080/headerData", {
                method: "post",
                body: JSON.stringify({ header: inputText }),
                headers: {
                    'Content-Type': "application/json"
                }
            })
        }

        else if (title === "category") {
            const data = await fetch("http://localhost:8080/categoryData", {
                method: "post",
                body: JSON.stringify({ header: selectedOption, category: inputText }),
                headers: {
                    'Content-Type': "application/json"
                }
            })
        }

        else {
            const data = await fetch("http://localhost:8080/subCategoryData", {
                method: "post",
                body: JSON.stringify({ category: selectedOption, subCategory: inputText }),
                headers: {
                    'Content-Type': "application/json"
                }
            })
        }

        navigate(`/dashboard/${title}`)

    }

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

    useEffect(() => {
        headerArr();
        categoryArr();
    }, []);


    return (
        <div className='masterContainer appRight'>
            <div className="masterBox1">{`Add ${title}`}</div>
            <div className="masterHeaderBox2">
                <div className="masterHeaderBox2Sec1">{`Add New ${title}`} </div>
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Red  " onClick={() => { navigate(`/dashboard/${title}`) }}>Back</div>
            </div>
            <div className="addHeaderSection">
                {
                    title === "category" ?
                        <>
                            <select value={selectedOption} className='addItemSelect' onChange={handleSelectChange}>
                                <option value="">---Select Header---</option>
                                {
                                    headerArray.map((data, index) => {
                                        return (
                                            <option value={data.header} key={index}>{data.header}</option>
                                        )
                                    })
                                }

                            </select>
                        </> :
                        title === "sub category" ?
                            <>
                                <select value={selectedOption} className='addItemSelect' onChange={handleSelectChange}>
                                    <option value="">---Select Category---</option>
                                    {
                                        categoryArray.map((data, index) => {
                                            return (
                                                <option value={data.category} key={index}>{data.category}</option>
                                            )
                                        })
                                    }
                                </select>
                            </> :
                            ""
                }

                <input type='text' value={inputText} className="addHeaderBox1Input" placeholder={`Enter ${title} Name`} onChange={inputHandle} />
                <div className="masterHeaderBox2Sec2 masterHeaderBox2Sec2Green " onClick={addHandle}>{`Add ${title}`} </div>
            </div>
        </div>
    )
}

export default AddItemsInDashboard