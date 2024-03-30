import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

const listForm = {
    userName: "",
    password: "",
}
const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}

function Login() {
    const [formValue, setFormValue] = useState(listForm)
    const [formError, setFormError] = useState({});
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const validateForm = () => {
        const error = {};

        if (isEmptyValue(formValue.password)) {
            error["Password"] = "";
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    }
    const handleUsername = (event) => {
        const { value } = event.target;
        setFormValue({
            ...formValue,
            username: value,
        });
    };
    const handlePassword = (event) => {
        const { value } = event.target;
        setFormValue({
            ...formValue,
            password: value,
        });
    };
    const handleClickForm = async (event) => {
        event.preventDefault()
        if (validateForm()) {
            navigate("/trangchu");
            // console.log("formValue", formValue)
            // alert('You have success logged ! ');
        } else {
            alert('This is an error alert - check it out')
        }
    }

    const getUser = async () => {
        const response = await axios.post('http://localhost:3001/logins', listForm);
        console.log(response.data);
        try {
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('isLoggedIn', true);
                alert('Đăng nhập thành công!');
                // navigate('/');
                window.location.href = '/trangchu';
            } else {
                throw new Error("Lỗi đăng nhập!");
            }
        } catch (error) {
            window.alert('Đăng nhập không thành công! Vui lòng kiểm tra lại thông tin.');
        }
    };

    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/logins'); // Replace with your actual API endpoint
    //             if (!response.ok) {
    //                 throw new Error(`API request failed with status ${response.status}`);
    //             }

    //             const data = await response.json();
    //             setUserData(data); 
    //         } catch (err) {
    //             console.error('Error fetching user data:', err);
    //             setError(err.message); 
    //         } finally {
    //             setIsLoading(false); 
    //         }
    //     };

    //     getUser();
    // }, []); 

    // Display content based on state
    // if (isLoading) {
    //     return <div>Loading user data...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>; // Display error message to the user
    // }

    return (
        <div>
            <div className='login-heading'>
                <h1 className='title'>Đăng Nhập</h1>
                <form id='form' className='flex' onSubmit={handleClickForm} >
                    <br></br>
                    <div className='form-check'>
                        <label htmlFor='userName' className='form-label'>Username : </label>
                        <br></br>
                        <input type='text' value={formValue.getUser} onChange={handleUsername} placeholder='Username' name='Username' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='pwd' className='checkvar'>Password: </label>
                        <br></br>
                        <input type='passWord' value={formValue.getUser} onChange={handlePassword} placeholder='Password' name='enterPassword' />
                    </div>
                    <br></br>
                    <button
                        onClick={getUser}
                        type='submit'
                        className='btn btn-primary'
                    >Tiếp Tục
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;