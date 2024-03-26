import React, { useState } from 'react';
import ReduxPropose from '../../redux/ReduxPropose/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../../Components/Register/Register.js';
import Logout from '../../Components/Logout/Logout.js';
function Following() {

    return (
        <div>
            <Register />
        </div>
    );
}

export default Following;