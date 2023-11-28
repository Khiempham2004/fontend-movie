import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
function MovieCarousel() {
    return (
        <div>
            <div className='Carousel'>
                <div className='carousel-title'>
                        <div className='Carousel-heading'>
                        <Link to='/collections/movies/phim-song-song-moi-ra-mat?c=5'>
                            <h2 className='css-pssmrm'>Phim song song & mới ra mắt</h2>
                        </Link>
                        </div>
                </div>
                <div className='b-block-css'>
                    <div className=''>
                        <img className='block-css'
                            alt="Tháng 11 xem gì?"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/27/11/9380d485/9380d485-7f99-45d3-be14-4ea36bf89aa4_360_540.jpg" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='block-css'
                            alt="Hợp Đồng Hôn Nhân Của Cô Park - The Story of Park's Marriage Contract"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/03/15/0037bba2/0037bba2-c678-4ebe-8716-c69491c8c896_360_540.jpg" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='block-css'
                            alt="Tình Yêu Vô Diện - Faceless Love"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/08/09/1699409491930/f99c6866fc84_360_540.jpg" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='block-css'
                            alt="Điền Canh Kỷ - Romance On The Farm"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/25/10/1698205864950/e1201aa8f4a1_360_540.jpg" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='block-css'
                            alt="Gieo Gì Gặt Nấy - GBRB Reap What You Sow"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/13/15/a6c460a8/a6c460a8-693a-43c6-8a75-8dfabbcda0f3_360_540.jpg" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='block-css'
                            alt="Người Yêu Dấu - My Dearest (Phần 2)"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/17/10/1700191207566/cf49daeccef8_360_540.jpg" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='block-css'
                            alt="Ngày Hôm Nay Cũng Thật Đáng Yêu - A Good Day To Be A Dog"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/16/13/1700116881911/d3f87285a998_360_540.jpg" decoding="async"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCarousel;
