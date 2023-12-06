import React from "react";
import { Link } from 'react-router-dom'
import './Style.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function ReduxStone() {
    return (
        <div className="propose-redux">
            <div className="redux-image">
                <img
                    className="redux-img"
                    alt="Tiến Sĩ Đá (Phần 3) - Dr. Stone (Season 3)"
                    src="https://img-zlr1.tv360.vn/image1/2023/10/25/15/1698222632849/c18855ebe609_360_540.jpg"
                />
            </div>
            <div className=" redux-following">
                <h4 title="Chú Thuật Hồi Chiến - Jujutsu Kaisen - Tập 1" className="redux-typography">Tiến Sĩ Đá (Phần 3) - Dr. Stone (Season 3) (Phát Song Song) - Tập 1</h4>
                <div>
                    <Link to='/'>
                        <div className="redux-link">
                            <p title="Phim Phát Song Song" className="psnyc-k4">Phim Phát Song Song</p>
                            <p title="Phim Hoạt Hình" className="psnyc-k27">Phim Hoạt Hình</p>
                        </div>
                    </Link>
                    <MDBCol md='2' lg='2' xl='11' className='mx-auto-mb-4'>
                        <div title="Tiến Sĩ Đá (Phần 3) - Dr. Stone (Season 3) chuyển thể từ manga cùng tên của tác giả Riichiro Inagaki. Lấy bối cảnh tương lai, ngày định mệnh của nhân loại đã đến, một tia sáng kì dị xuất hiện trên địa cầu khiến toàn bộ loài người hóa thành đá. Mấy ngàn năm trôi qua, ngày nọ cậu thiếu niên Senkuu bỗng nhiên phá đá thức tỉnh, trước mắt cậu là những pho tượng hóa đá của nhân loại. Cùng với cậu bạn của mình là Taiju bắt đầu đại nghiệp giải cứu nhân loại. Cuộc phiêu lưu mới bắt đầu, điều gì sẽ chờ đợi Senkuu và Taiju ở phía trước? Đại nghiệp ấy có thành công mỹ mãn hay thất bại trong tuyệt vọng?" class="css-fn5y2o">
                            Tiến Sĩ Đá (Phần 3) - Dr. Stone (Season 3) chuyển thể từ manga cùng tên của tác giả Riichiro Inagaki.
                            Lấy bối cảnh tương lai, ngày định mệnh của nhân loại đã đến, một tia sáng kì dị xuất hiện trên địa cầu khiến toàn bộ loài người hóa thành đá.
                            Mấy ngàn năm trôi qua, ngày nọ cậu thiếu niên Senkuu bỗng nhiên phá đá thức tỉnh, trước mắt cậu là những pho tượng hóa đá của nhân loại.
                            Cùng với cậu bạn của mình là Taiju bắt đầu đại nghiệp giải cứu nhân loại.
                            Cuộc phiêu lưu mới bắt đầu, điều gì sẽ chờ đợi Senkuu và Taiju ở phía trước? Đại nghiệp ấy có thành công mỹ mãn hay thất bại trong tuyệt vọng?
                        </div>
                    </MDBCol>
                    <div className="redux-mdbcol" >
                        <MDBCol className="coller-rest">
                            <div className="collest-redux">
                                <p title="Phim phát song song,  Phim hoạt hình,  T13">Thể loại:</p>
                                <p>Phim phát song song,  Phim hoạt hình,  T13</p>
                            </div>
                            <MDBCol>
                                <div className="collest-p">
                                    <p title="Nhật Bản">Quốc gia:</p>
                                    <p>Nhật Bản</p>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="collest-col">
                                    <p title="Roger Michell"> Đạo diễn:</p>
                                    <p> Hồ Ý Quyền </p>
                                </div>
                            </MDBCol>
                        </MDBCol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxStone;