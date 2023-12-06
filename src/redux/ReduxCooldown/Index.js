import React from "react";
import { Link } from 'react-router-dom'
import './Style.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function ReduxCooldown() {
    return (
        <div className="propose-redux">
            <div className="redux-image">
                <img
                    className="redux-img"
                    alt="Chú Thuật Hồi Chiêu"
                    src="https://img-zlr1.tv360.vn/image1/2023/02/14/16/1676365685185/2c0a6980f5a0_360_540.jpg"
                />
            </div>
            <div className=" redux-following">
                <h4 title="Chú Thuật Hồi Chiến - Jujutsu Kaisen - Tập 1" className="redux-typography">Chú Thuật Hồi Chiến - Jujutsu Kaisen - Tập 1</h4>
                <div>
                    <Link to='/'>
                        <div className="redux-link">
                            <p title="Đang Thịnh Hành" className="psnyc-k4">Đang Thịnh Hành </p>
                            <p title="Phim Hoạt Hình" className="psnyc-k27">Phim Hoạt Hình</p>
                        </div>
                    </Link>
                    <MDBCol md='2' lg='2' xl='11' className='mx-auto-mb-4'>
                        <div title="Chú Thuật Hồi Chiến - Jujutsu Kaisen kể về Itadori Yuuji - cậu thiếu niên mang năng lực thể chất phi thường. Đang có cuộc sống bình thường của một học sinh cấp III, nhưng đến một ngày, vì cứu bạn bè bị đe doạ bởi “lời nguyền”, cậu đã nuốt chú vật đặc cấp - “Ngón tay của Ryomen Sukuna” - và để cho nó trú ngụ trong linh hồn mình. Cùng chia sẻ thể xác với lời nguyền “Ryomen Sukuna”, Itadori dưới sự hướng dẫn của Chú thuật sư mạnh nhất - Gojo Satoru - đã nhập học trường chuyên ngành chống lại lời nguyền. Trường công lập cao đẳng chuyên môn chú thuật Tokyo. Câu chuyện bi tráng không còn đường lui của cậu thiếu niên ấy bắt đầu từ đây." class="css-fn5y2o">
                            Chú Thuật Hồi Chiến - Jujutsu Kaisen kể về Itadori Yuuji - cậu thiếu niên mang năng lực thể chất phi thường.
                            Đang có cuộc sống bình thường của một học sinh cấp III, nhưng đến một ngày, vì cứu bạn bè bị đe doạ bởi “lời nguyền”, cậu đã nuốt chú vật đặc cấp - “Ngón tay của Ryomen Sukuna” - và để cho nó trú ngụ trong linh hồn mình.
                            Cùng chia sẻ thể xác với lời nguyền “Ryomen Sukuna”, Itadori dưới sự hướng dẫn của Chú thuật sư mạnh nhất - Gojo Satoru - đã nhập học trường chuyên ngành chống lại lời nguyền.
                            Trường công lập cao đẳng chuyên môn chú thuật Tokyo. Câu chuyện bi tráng không còn đường lui của cậu thiếu niên ấy bắt đầu từ đây.
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

export default ReduxCooldown;