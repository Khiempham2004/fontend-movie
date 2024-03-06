import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import './Register.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { createRegister } from './auth.js';


const listForms = {
    Email: "",
    UserName: "",
    Password: "",
}
const isEmptyRegister = (value) => {
    return !value || value.trim().length < 1;
}

function Register(registerId) {
    const [formRegister, setFormRegister] = useState(listForms)
    const [formError, setFormError] = useState({});
    const [email , setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const navigate = useNavigate();

    const validateForm = () => {
        const error = {};

        if (isEmptyRegister(formRegister.Password)) {
            error["Password"] = "";
        }
        if (isEmptyRegister(formRegister.Email)) {
            error["Email"] = "";
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    }
    const handleEmail = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            Email: value,
        });
    };
    const handleUserName = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            UserName: value,
        })
    }
    const handlePassword = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            Password: value,
        });
    };

    const handleClickForm = (event) => {
        event.preventDefault()
        if (validateForm()) {
            navigate("/");
            console.log("formValue", formRegister)
            alert('You have Register successfully logged ! ');
        } else {
            alert('This is an error alert - check it out')
        }
    }

    const [appRegister, setAppRegister] = useState('http://localhost:3000/register');
    const [data , setData] = useState('null')
    useEffect(() =>{
        const connectRegister =  createRegister(appRegister , registerId);
        connectRegister.connect();
        return () =>{
            connectRegister.disconnect();
        };
    } , [registerId , appRegister]);

    fetch('http://localhost:3000/register')
      .then(response => response.json())
      .then(result => {
        // Update state with the fetched data
        setData(result);
      });
    // const userRegister = async (event) => {
    //     event.preventDefault()
    //     try {
    //         const response = await axios.post('http://localhost:3000/register', {
    //             email,
    //             userName,
    //             passWord
    //         });
    //         console.log('register succesfully' , response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    return (
        <div>
            <div className='login-heading'>
                <h1 className='title'>Register</h1>
                <form id='form' className='flex' onSubmit={handleClickForm} >
                    <br></br>
                    <div className='form-check'>
                        <label htmlFor='userName' className='form-label'>Email:</label>
                        <br></br>
                        <input type='text' value={formRegister.Email} onChange={handleEmail} placeholder='Email' name='Email' />
                    </div>
                    <br></br>
                    <div className='form-User'>
                        <label className='form-label'>UserName :</label>
                        <input type='text' value={formRegister.UserName} onChange={handleUserName} placeholder='Username' name='Username' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='pwd' className='checkvar'>
                            Password:
                        </label>
                        <br></br>
                        <input type='passWord' value={formRegister.Password} onChange={handlePassword} placeholder='Password' name='enterPassword' />
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

export default Register;