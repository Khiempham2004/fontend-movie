import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import './Register.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const listForms = {
    Email: "",
    UserName: "",
    Password: "",
}
const isEmptyRegister = (value) => {
    return !value || value.trim().length < 1;
}

function Register() {
    const [formRegister, setFormRegister] = useState(listForms)
    const [formError, setFormError] = useState({});
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const navigate = useNavigate('');

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
            navigate("/login");
            console.log("formValue", formRegister)
            alert('You have Register successfully logged ! ');
        } else {
            alert('This is an error alert - check it out')
        }
    }

    // const [appRegister, setAppRegister] = useState('');
    // const [data, setData] = useState('null')
    // // useEffect(() =>{
    // //     const connectRegister =  createRegister(appRegister , registerId);
    // //     connectRegister.connect();
    // //     return () =>{
    // //         connectRegister.disconnect();
    // //     };
    // // } , [registerId , appRegister]);

    // // fetch('http://localhost:3000/register')
    // //   .then(response => response.json())
    // //   .then(result => {
    // //     // Update state with the fetched data
    // //     setData(result);
    // //   });
    const userRegister = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/register', {
                email: formRegister.Email,
                userName: formRegister.UserName,
                passWord: formRegister.Password,
            });
            console.log('register succesfully', response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.post('http://localhost:3001/register');
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('register error :>>', Register.error);
    //         }
    //     };

    //     fetchData();
    // }, []);



    return (
        <div>
            <div className='register-heading'>
                <form action='' onSubmit={handleClickForm}>
                    <h1 className=''>Register</h1>
                    <div className="container">
                        <p className='singofLogin'>Please fill in this form to create an account.</p>
                        <hr></hr>

                        <label><b>Email</b></label>
                        <input type="text" value={formRegister.Email} onChange={handleEmail} placeholder="Enter Email" name="email" id="email" required />

                        <label><b>UserName</b></label><br></br>
                        <input type="username" value={formRegister.UserName} onChange={handleUserName} placeholder="username" id='password' name="username" required />
                        <br></br>
                        <label><b>Password</b></label>
                        <input type="password" value={formRegister.Password} onChange={handlePassword} placeholder="Password" name="psw-repeat" id="psw-repeat" required />
                        <hr></hr>
                        <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>

                        <button type="submit" className="registerbtn" >Register</button>
                    </div>

                    <div className="container signin">
                        <p >Already have an account? <a href="/">Sign in</a>.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;