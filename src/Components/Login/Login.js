import React, { Component } from 'react'
import { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';

const listForm = {
    Email: "",
    Password: "",
}
const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}
const isEmailValid = (Email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email);
}


function Login() {
    const [formValue, setFormValue] = useState(listForm)
    const [formError, setFormError] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const error = {};

        if (isEmptyValue(formValue.Email)) {
            error["Email"] = "";
        } else {
            if (!isEmailValid(formValue.Email)) {
                error["Email"] = "";
            }
        }
        if (isEmptyValue(formValue.Password)) {
            error["Password"] = "";
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    }
    const handleEmail = (event) => {
        const { value } = event.target;
        setFormValue({
            ...formValue,
            Email: value,
        });
    };
    const handlePassword = (event) => {
        const { value } = event.target;
        setFormValue({
            ...formValue,
            Password: value,
        });
    };

    const handleClickForm = (event) => {
        event.preventDefault()
        if (validateForm()) {
            navigate("/");
            console.log("formValue", formValue)
            alert('You have success logged ! ');
        } else {
            alert('This is an error alert - check it out')
        }
    }
    return (
        <div>
            <div className='login-heading'>
                <h1 className='title'>Đăng Nhập</h1>
                <form id='form' className='flex' onSubmit={handleClickForm} >
                    <br></br>
                    <div className='form-check'>
                        <label htmlFor='userName' className='form-label'>Email:</label>
                        <br></br>
                        <input type='text' value={formValue.Email} onChange={handleEmail} placeholder='Email' name='Email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pwd' className='checkvar'>
                            Password:
                        </label>
                        <br></br>
                        <input type='passWord' value={formValue.Password} onChange={handlePassword} placeholder='Password' name='enterPassword' />
                    </div>
                    <br></br>
                    <button
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