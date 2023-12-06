import React from "react";
import { Link } from 'react-router-dom'
import './Style.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Destruction() {
    return (
        <div className="propose-redux">
            <div className="redux-image">
                <img
                    className="redux-img"
                    alt="Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba Entertainment District Arc"
                    src="https://img-zlr1.tv360.vn/image1/2023/02/15/09/1676426466825/cb6f4a2c6bff_360_540.jpg"
                />
            </div>
            <div className=" redux-following">
                <h4 title="Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba" className="redux-typography">Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba</h4>
                <div>
                    <Link to='/'>
                        <div className="redux-link">
                            <p title="Đang Thịnh Hành" className="psnyc-k4">Đang Thịnh Hành </p>
                            <p title="Phim Hoạt Hình" className="psnyc-k27">Phim Hoạt Hình</p>
                        </div>
                    </Link>
                    <MDBCol md='2' lg='2' xl='11' className='mx-auto-mb-4'>
                        <div title="Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba Entertainment District Arc - Sự tàn phá của sự cố Mugen Train vẫn đè nặng lên các thành viên của Quân đoàn Sát quỷ. Mặc dù được cho thời gian để hồi phục, cuộc sống vẫn phải tiếp tục, vì kẻ ác không bao giờ ngủ: một con quỷ hung ác đang khủng bố những người phụ nữ quyến rũ của Khu giải trí Yoshiwara." class="css-fn5y2o">
                            Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba Entertainment District Arc - Sự tàn phá của sự cố Mugen Train vẫn đè nặng lên các thành viên của Quân đoàn Sát quỷ. Mặc dù được cho thời gian để hồi phục, cuộc sống vẫn phải tiếp tục, vì kẻ ác không bao giờ ngủ: một con quỷ hung ác đang khủng bố những người phụ nữ quyến rũ của Khu giải trí Yoshiwara.
                        </div>
                    </MDBCol>
                    <div className="redux-mdbcol" >
                        <MDBCol className="coller-rest">
                            <div className="collest-redux">
                                <p title="Đang thịnh hành ,  Phim hoạt hình">Thể loại:</p>
                                <p>Đang thịnh hành ,  Phim hoạt hình</p>
                            </div>
                            <MDBCol>
                                <div className="collest-p">
                                    <p title="Nhật Bản">Quốc gia:</p>
                                    <p>Nhật Bản</p>
                                </div>
                            </MDBCol>
                        </MDBCol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destruction;