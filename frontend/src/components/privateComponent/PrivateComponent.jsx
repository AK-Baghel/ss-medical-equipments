import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/AppContext';

const PrivateComponent = () => {
    const { value, setvalue } = useContext(Context)


    // const auth = localStorage.getItem('user');
    {/* here we are getting user items enter by user on sign up page for login */ }

    return (value ? <Outlet /> : <Navigate to="/dashboard/login" />)

}

export default PrivateComponent;