import React from "react";
import './Style.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom'

const steps = [
    'Chọn Gói',
    'Thanh Toán',
    'Kết Quả',
];
function Packages() {
    return (
        <div>
            <h1 className="component-heading">Chọn gói</h1>
            <div className="Packages-box">
                <Box sx={{ width: '100%' }} className="pack-component">
                    <Stepper activeStep={0} alternativeLabel>
                        {steps.map((id) => (
                            <Step key={id} >
                                <StepLabel>{id}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
            <div>
                <div className="component-img">
                    <Link to='/'>
                        <img
                            className="packages-image"
                            src="https://img-zlr1.tv360.vn/image1/2023/08/12/20/1691848522445/8e904a265984.png"
                            alt="Gói Standard"
                        />
                        <img
                            className="packages-image"
                            src="https://img-zlr1.tv360.vn/image1/2023/08/12/20/1691848678439/b9b840f8ad52.png"
                            alt="Gói Vip K+ Mobile"
                        />
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <img
                            className="packges-img"
                            src="https://img-zlr1.tv360.vn/image1/2023/08/12/20/1691848593500/bc749fdfeb41.png"
                            alt="Gói Vip K+ HD"
                        />
                    </Link>
                </div>

            </div>
            <div className="packages-heading" >
                <h4 className="">Chính sách gói cước :</h4>
                <div className="packges-pead">
                    <p>- Sử dụng và xem trên lãnh thổ Việt Nam</p>
                    <p>- Gói cước gia hạn tự động, có thể quản lý và hủy gia hạn bất cứ lúc nào.</p>
                </div>
            </div>
        </div>
    );
}

export default Packages;