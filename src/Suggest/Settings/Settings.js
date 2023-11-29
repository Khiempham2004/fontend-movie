import React from 'react';
import { Link } from 'react-router-dom'
import './Settings.css'
function Settings() {
    return (
        <div>
            <div className='login-settings'>
                <h2 className='Suggest-setting'>Xin Chào, Phạm Khiêm</h2>
                <Link to='/'>Đăng xuất</Link>
            </div>
        </div>
    );
}

export default Settings;