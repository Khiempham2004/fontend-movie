import React, { Component } from 'react';
import './Propose.css';
import './index.js';
import { Link } from 'react-router-dom'

function Propose() {
    return (
        <div>
            <div className='propose'>
                <div className='propose-flex'>
                    <div className='propose-title'>
                        <Link to='/recommend/movies?page=home&id=recommend_film'>
                            <h2 className='propose-heading'>Phim Đề Xuất</h2>
                        </Link>
                    </div>
                    <div className='propose-context'>
                        <div className='propose-carousel'>
                            <div className='slider-wrapper'>
                                <ul className='slider-animated'>
                                    <li className='slide-selected'>
                                        <div>
                                            <img className='mySlide'
                                                src="https://img-zlr1.tv360.vn/image1/2023/10/26/08/1698282328137/9aa735e2280d_360_540.jpg"
                                                alt='Chuyện Tình Notting Hill'
                                            />
                                        </div>

                                        <div>
                                            <img className='mySlide'
                                                src="https://img-zlr1.tv360.vn/image1/2022/08/16/16/f9eee2aa/f9eee2aa-e9bc-4d71-b6cd-40b9e25adcd5_360_540.jpg"
                                                alt='Người Hoobit : Đại Chiến 5 Cánh Quân'
                                            />
                                        </div>
                                        <br></br>
                                        <div>
                                            <img className='mySlide'
                                                alt="phim hành động"
                                                src="https://img-zlr1.tv360.vn/image1/2023/02/14/16/1676365685185/2c0a6980f5a0_360_540.jpg"
                                            />
                                        </div>
                                        <div>
                                            <img className='mySlide'
                                                alt="Tiến Sĩ Đá (Phần 3) - Dr. Stone (Season 3)"
                                                src="https://img-zlr1.tv360.vn/image1/2023/10/25/15/1698222632849/c18855ebe609_360_540.jpg"
                                            />
                                        </div>
                                        <div>
                                            <img className='mySlide'
                                                alt="Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba Entertainment District Arc"
                                                src="https://img-zlr1.tv360.vn/image1/2023/02/15/09/1676426466825/cb6f4a2c6bff_360_540.jpg"
                                            />
                                        </div>

                                        <div>
                                            <img className='mySlide'
                                                alt="Tân Tiếu Ngạo Giang Hồ (2013) - Swordsman"
                                                src="https://img-zlr1.tv360.vn/image1/2023/08/18/16/1692352344605/0fa3c89678db_360_540.jpg"
                                            />
                                        </div>
                                        <div>
                                            <img className='mySlide'
                                                alt="Tân Thần Điêu Đại Hiệp - The Romance Of The Conder Heroes"
                                                src="https://img-zlr1.tv360.vn/image1/2023/10/04/09/1696384844690/815c39ed38f0_360_540.jpg"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Propose;