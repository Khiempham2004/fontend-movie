import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RemoveItem } from '../Logout/AuthContext';
// const AuthContext = React(useContext);
const Logout = () => {
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();
    // const logoutUser = useContext(AuthContext);

    const hanldLogout = async () => {
        setLogout(true);
        try {
            RemoveItem('token');
            // await logoutUser();
            navigate('/register');
        } catch (error) {
            console.log("logout :>>", error);
        } finally {
            setLogout(false)
        }
    }

    return (
        <div>
            <button onClick={hanldLogout} disabled={logout}>Logout</button>
        </div>
    )
}

export default Logout;
