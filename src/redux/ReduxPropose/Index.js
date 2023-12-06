import React from "react";
import './Style.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import { Link } from 'react-router-dom'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function ReduxPropose() {
    return (
        <div className="propose-redux">
            <div className="redux-image">
                <img
                    className="redux-img"
                    src="https://img-zlr1.tv360.vn/image1/2023/10/26/08/1698282328137/9aa735e2280d_360_540.jpg"
                    alt='Chuyện Tình Notting Hill'
                />
            </div>
            <div className=" redux-following">
                <h4 title="Chuyện Tình Notting Hill - Notting Hill" className="redux-typography">Chuyện Tình Notting Hill - Notting Hill</h4>
                <div>
                    <Link to='/'>
                        <div className="redux-link">
                            <p title="Phim Âu Mỹ" className="psnyc-k4">Phim Âu Mỹ</p>
                            <p title="T13" className="psnyc-k27">T13</p>
                        </div>
                    </Link>
                    <MDBCol md='2' lg='2' xl='11' className='mx-auto-mb-4'>
                        Chuyện Tình Notting Hill - Notting Hill kể về câu chuyện tình đích thực của anh chàng bán sách Williams Thacker và nữ minh tinh nổi tiếng  Anna Scott.
                        Cả hai gặp nhau khi Anna Scott  bước vào tiệm sách của Thacker.
                        Cách xử sự tế nhị và thông minh của Thacker khi bắt gặp một kẻ trộm sách đã làm cho Anna ấn tượng.
                        Thacker cũng ngẩn ngơ vì vẻ đẹp của cô gái lạ mặt.
                        Dần dần, những sự tình cờ đã khiến cả hai nảy sinh tình cảm.
                        Dù chàng chỉ là một anh bán sách bình thường còn nàng lại là ngôi sao nổi tiếng nhưng tình yêu đã gắn kết họ lại với nhau và tại Notting Hill thơ mộng, họ đã bên nhau mãi mãi.
                    </MDBCol>
                    <div className="redux-mdbcol" >
                        <MDBCol md="2" lg="2" xl="3" className='mx-auto-mb-5' >
                            <div >
                                <div title="Alec Baldwin,Rhys Ifans,Julia Roberts,Hugh Bonneville,Hugh Grant" className="heading-div">Diễn viên:</div>
                                <div className="redux-div">
                                    <div>
                                        Alec Baldwin
                                    </div>
                                    <div>
                                        Rhys Ifans
                                    </div>
                                    <div>
                                        Julia Roberts
                                    </div>
                                    <div>
                                        Hugh Bonneville
                                    </div>
                                    <div>
                                        Hugh Grant
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol className="coller-rest">
                            <div className="collest-redux">
                                <p title="Phim Âu Mỹ , T13">Thể loại:</p>
                                <p>Phim Âu Mỹ , T13</p>
                            </div>
                            <MDBCol>
                                <div className="collest-col">
                                    <p title="Roger Michell"> Đạo diễn:</p>
                                    <p> Roger Michell</p>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="collest-p">
                                    <p title="United States of America">Quốc gia:</p>
                                    <p>United States of America</p>
                                </div>
                            </MDBCol>
                        </MDBCol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxPropose;