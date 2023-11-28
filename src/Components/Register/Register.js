import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css'
function Register() {
    // import React from 'react';
// import { Link } from 'react-router-dom'
// import * as authService from '../Register/Register'

// export const register = async (req , res) =>{
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
            <div>
                <Link to='/'><h2 className='res-class'>Register</h2></Link>
            </div>
        </div>
    </div> 
);
}

export default Register;

