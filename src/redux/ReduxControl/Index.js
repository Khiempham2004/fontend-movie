import React from "react";
import { Link } from 'react-router-dom'
import './Style.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function ReduxControl() {
    
    return (
        <div className="propose-redux">
            <div className="redux-image">
                <img
                    className="redux-img"
                    alt="Tân Thần Điêu Đại Hiệp - The Romance Of The Conder Heroes"
                    src="https://img-zlr1.tv360.vn/image1/2023/10/04/09/1696384844690/815c39ed38f0_360_540.jpg"
                />
            </div>
            <div className=" redux-following">
                <h4 title="Tân Tiếu Ngạo Giang Hồ (2013) - Swordman - Tập 1" className="redux-typography">Tân Tiếu Ngạo Giang Hồ (2013) - Swordman - Tập 1</h4>
                <div>
                    <Link to='/'>
                        <div className="redux-link">
                            <p title="Đang Thịnh Hành" className="psnyc-k4">Phim Trung Quốc</p>
                            <p title="Phim Hoạt Hình" className="psnyc-k27">Phim Bộ</p>
                            <p title="Phim Hoạt Hình" className="psnyc-k27">T13</p>
                        </div>
                    </Link>
                    <MDBCol md='2' lg='2' xl='11' className='mx-auto-mb-4'>
                    <div title="Tân Tiếu Ngạo Giang Hồ (2013) - Swordman xoay quanh chàng thiếu niên trẻ tuổi Lệnh Hồ Xung với những khó khăn trên giang hồ và mối tình với thánh nữ Nhậm Doanh Doanh. Đặc biệt phiên bản này tập trung khai thác chuyện tình yêu nam nữ, đặc biệt là những éo le trong mối quan hệ giữa Lệnh Hồ Xung và Đông Phương Bất Bại. Đông Phương Bất Bại hóa thành nữ giới cướp người yêu của Nhậm Doanh Doanh." class="css-fn5y2o">
                    Tân Tiếu Ngạo Giang Hồ (2013) - Swordman xoay quanh chàng thiếu niên trẻ tuổi Lệnh Hồ Xung với những khó khăn trên giang hồ và mối tình với thánh nữ Nhậm Doanh Doanh.
                    Đặc biệt phiên bản này tập trung khai thác chuyện tình yêu nam nữ, đặc biệt là những éo le trong mối quan hệ giữa Lệnh Hồ Xung và Đông Phương Bất Bại.
                    Đông Phương Bất Bại hóa thành nữ giới cướp người yêu của Nhậm Doanh Doanh.
                    </div>
                    </MDBCol>
                    <div className="redux-mdbcol" >
                        <MDBCol className="coller-rest">
                            <div className="collest-redux">
                                <p title="Trần Kiều Ân,  Hoắc Kiến Hoa,  Viên San San">Thể loại:</p>
                                <p>Trần Kiều Ân,  Hoắc Kiến Hoa,  Viên San San</p>
                            </div>
                            <MDBCol>
                                <div className="collest-p">
                                    <p title="People's Republic of China">Quốc gia:</p>
                                    <p>People's Republic of China</p>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="collest-col">
                                    <p title="Hồ Ý Uyên"> Đạo diễn:</p>
                                    <p>Hồ Ý Uyên</p>
                                </div>
                            </MDBCol>
                        </MDBCol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxControl;