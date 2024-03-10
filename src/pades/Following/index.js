import React, { useState } from 'react';
import ReduxPropose from '../../redux/ReduxPropose/Index';
import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Register from '../../Components/Register/Register.js';
import Login from '../../Components/Login/Login.js';
function Following() {

    return (
        <div>
            <Register/>
        </div>
    );
}

export default Following;