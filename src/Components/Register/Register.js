import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    // const register = async (req , res) =>{
    //         const { Email , Password , confirmPassword } = req.body
    //         try {
    //             if(!Email || !Password || !confirmPassword) return res.status(400).json({
    //                 err:1,
    //                 msg:'Mising input  !'
    //             }) 
    //         } catch (error) {
    //             return res.status(500).json({
    //                 err: -1,
    //                 msg : 'Fail at auth controller: ' + error
    //             })
    //         }
    //     }

    return (

        <div>
            <div>
                <div className='form-Register'>
                <h2 className='res-class'>Register</h2>
                    <form id='form'>
                        <div>
                            <label className='lb-form'>
                                Email:
                            </label>
                            <input type='text' placeholder='Email' name='Email' />
                        </div>
                        <div>
                            <label>UserName:</label>
                            <input type='UserName' placeholder='UserName' name='UserName' />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type='Password' placeholder='Password' name='Password' />
                        </div>
                        <button type='text'>Creat account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Register;