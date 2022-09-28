import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios.config.';

export default function Collab() {
    const navigate = useNavigate()
    const handleLogout = () => {
        axiosInstance.get('/logout')
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                navigate('/')
            })
    }
    return <div>
        <button className="btn" onClick={handleLogout}> Logout</button>
    </div>;
}