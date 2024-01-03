import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BiSolidUserCircle } from "react-icons/bi"
import { AiFillLock } from "react-icons/ai"
// import Toast from '../toast/Toast'


import "./style.css"
import { Context } from '../../../components/context/AppContext'


function Login({ dashboardToggle }) {

    const { value, setvalue } = useContext(Context)

    const navigate = useNavigate();

    const [remember, setRemember] = useState(false);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () => {
        // const data = await fetch("http://localhost:8080/signin", {
        //     method: "post",
        //     body: JSON.stringify({ login, password }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // const result = await data.json();

        if (false) {
            // checkLogin();
            navigate('/')
        }
        else {
            setvalue(true);
            dashboardToggle(true)
            navigate('/dashboard/master')

        }
    }

    useEffect(() => {
        dashboardToggle(false)
        setvalue(false)
    }, [])

    return (
        <div className="loginContainer">
            <div className="loginBlackShade">
                <div className="loginSection">
                    <div className="loginHeading">SS Medical </div>
                    <div className="loginText">Login</div>
                    <div className="loginUser">
                        <input type="text" className="loginInput" placeholder='Username' value={login} onChange={(e) => { setLogin(e.target.value) }} />
                        <BiSolidUserCircle className='loginIcon' />
                    </div>
                    <div className="loginUser">
                        <input type="password" className="loginInput" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <AiFillLock className='loginIcon' />
                    </div>
                    {/* <label className="loginRememberBox">
                        <input type="checkbox" defaultChecked={remember} onChange={() => setRemember(!remember)} />
                        Remember Me
                    </label> */}
                    <div className="loginButton" onClick={signIn}>Sign in</div>
                </div>
            </div>
        </div>
    )
}

export default Login