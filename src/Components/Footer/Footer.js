import React, { Component } from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='Footer-css'>
            <div className='Footer-responsive-container'>
                <div className='Footer-responsive-intainer'>
                    <div className='Footer-conversation'>
                        <div className='Footer-images'>
                            <img
                                src='https://img-zlr2.tv360.vn/tv360-static/static/web/images/logo.png'
                                alt='TV360'
                            />
                        </div>
                        <div className='Footer-menus'>
                            <Link to='/intro'>Giới Thiệu</Link><br></br>
                            <Link to='/terms'>Điều Khoản Ứng Dụng</Link><br></br>
                            <Link to='/privacy-policy'>Chính Sách Bảo Mật</Link><br></br>
                            <Link to='/support'>Liên Hệ</Link><br></br>
                            <Link to='/huongdan'>Hướng Dẫn</Link><br></br>
                        </div>
                    </div>
                    <br></br>
                    <div className='Footer-intersation'>
                        <div>
                            Cơ quan chủ quản: Tập Đoàn Công nghiệp - Viễn thông Quân Đội <br></br>
                            Địa chỉ: Lô D26 khu đô thị mới Cầu Giấy , phường Yên Hòa, quận Cầu Giấy, TP Hà Nội, Việt Nam. <br></br>
                            Tổng đài chăm sóc khách hàng: 18008098 (miễn phí). <br></br>
                            Đăng ký kinh doanh: số 0100109106 đăng ký lần đầu ngày 13 tháng 07 năm 2010. <br></br>
                            Giấy phép số: số 591/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 15/12/2020.
                        </div>
                    </div>
                </div>

                <div className='Footer-responsive-external'>
                    <div className=''>
                        Tải app và theo dõi TV360
                    </div>
                    <div className='Footer-center'>
                        <div className=''>Google Play
                            <i className="fa-brands fa-google-play"></i>
                        </div>
                        <div>
                            App Store
                            <img
                                src=''
                            />
                        </div>
                        <div>
                            <i class='bx bxl-facebook-square bx-md'></i>
                        </div>
                    </div>
                    <div></div>
                    <div className='Footer-left'>
                        <div>
                            <img
                                width="160px"
                                src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                                className="css-9taffg"
                            />
                        </div>
                    </div>
                    <div className='Footer-sponsion'>
                        <div>
                            <img
                                width="180px"
                                src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?id=1a959ebc-0667-458d-a57c-52bb0a51b2e5"
                                className="css-9taffg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;