import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/AppContext';

const PrivateComponent = () => {
    const { value, setvalue } = useContext(Context)


    const auth = localStorage.getItem('user'); {/* here we are getting user items enter by user on sign up page for login */ }

    return (value ? <Outlet /> : <Navigate to="/dashboard/login" />)
    {/* if auth data is empty our all components becomes private and we are unable to excess them and 
    it will navigates us to signup page again & if there's some data in auth then we will send to outlet comp. 
    
    now if our data auth is true then we have another task to hide signup component 
    */ }
}

export default PrivateComponent;