import React from "react";
import './Style.css'
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function ReduxMainSlider() {
    return (
        <div className="propose-redux">
            <div className="redux-image">
                <img
                    className="redux-img"
                    src="https://img-zlr1.tv360.vn/image1/2022/08/16/16/f9eee2aa/f9eee2aa-e9bc-4d71-b6cd-40b9e25adcd5_360_540.jpg"
                    alt='Người Hoobit : Đại Chiến 5 Cánh Quân'
                />
            </div>
            <div className=" redux-following">
                <h4 title="Người Hobbit: Đại Chiến 5 Cánh Quân - The Hobbit: The Battle of the Five Armies" className="redux-typography">Người Hobbit: Đại Chiến 5 Cánh Quân - The Hobbit: The Battle of the Five Armies</h4>
                <div>
                    <Link to='/'>
                        <div className="redux-link">
                            <p title="Phim Âu Mỹ" className="psnyc-k4">Phim Âu Mỹ</p>
                            <p title="Hành Động & Phiêu Lưu" className="psnyc-k27">Hành Động & Phiêu Lưu</p>
                        </div>
                    </Link>
                    <MDBCol md='2' lg='2' xl='11' className='mx-auto-mb-4'>
                        <div title="Người Hobbit: Đại Chiến 5 Cánh Quân - The Hobbit: The Battle of the Five Armies là phần cuối cùng của series phim nói về người Hobbit. Đoàn quân người lùn của Thorin đã đặt được chân tới hang ổ của con rồng Smaug xấu xa. Chàng Hobbit quả cảm Bilbo và những người lùn lúc này đang ở rất gần Erebor và kho báu lẽ ra thuộc về họ. Chỉ có điều, có quá nhiều biến cố và thế lực đang nhăm nhe ập tới ngay sau khi họ đánh bại được rồng Smaug." class="css-fn5y2o">
                            Người Hobbit: Đại Chiến 5 Cánh Quân - The Hobbit: The Battle of the Five Armies là phần cuối cùng của series phim nói về người Hobbit.
                            Đoàn quân người lùn của Thorin đã đặt được chân tới hang ổ của con rồng Smaug xấu xa.
                            Chàng Hobbit quả cảm Bilbo và những người lùn lúc này đang ở rất gần Erebor và kho báu lẽ ra thuộc về họ.
                            Chỉ có điều, có quá nhiều biến cố và thế lực đang nhăm nhe ập tới ngay sau khi họ đánh bại được rồng Smaug.
                        </div>
                    </MDBCol>
                    <div className="redux-mdbcol" >
                        <MDBCol md="2" lg="2" xl="3" className='mx-auto-mb-5' >
                            <div >
                                <div title=" Martin Freeman,  Richard Armitage,  Ian McKellen,  Evangeline Lilly" className="heading-div">Diễn viên:</div>
                                <div className="redux-div">
                                    Martin Freeman,  Richard Armitage,  Ian McKellen,  Evangeline Lilly
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol className="coller-rest">
                            <div className="collest-redux">
                                <p title="Phim Âu Mỹ,  Hành động & Phiêu lưu">Thể loại:</p>
                                <p>Phim Âu Mỹ,  Hành động & Phiêu lưu</p>
                            </div>
                            <MDBCol>
                                <div className="collest-col">
                                    <p title="Peter Jackson"> Đạo diễn:</p>
                                    <p> Peter Jackson</p>
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

export default ReduxMainSlider;