import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RemoveItem } from '../Logout/AuthContext';


const Logout = () => {
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();

    const hanldLogout = async () => {
        setLogout(true);
        try {
            RemoveItem('token')
            navigate('/');
        } catch (error) {
            console.log("logout :>>", error);
        } finally {
            setLogout(false);
        }
    }

    return (
        <div className="container">
            <h1>Logout Page</h1>
            <p>Are you sure you want to logout?</p>
            <button className="logout-btn" onClick={hanldLogout} disabled={logout}>Logout</button>
        </div>
    )
}

export default Logout;
