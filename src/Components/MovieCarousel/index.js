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
                    <Link to=''> 
                        <img className='block-css'
                            alt="Tháng 11 xem gì?"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/27/11/9380d485/9380d485-7f99-45d3-be14-4ea36bf89aa4_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Hợp Đồng Hôn Nhân Của Cô Park - The Story of Park's Marriage Contract"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/03/15/0037bba2/0037bba2-c678-4ebe-8716-c69491c8c896_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Tình Yêu Vô Diện - Faceless Love"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/08/09/1699409491930/f99c6866fc84_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Điền Canh Kỷ - Romance On The Farm"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/25/10/1698205864950/e1201aa8f4a1_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Gieo Gì Gặt Nấy - GBRB Reap What You Sow"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/13/15/a6c460a8/a6c460a8-693a-43c6-8a75-8dfabbcda0f3_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Người Yêu Dấu - My Dearest (Phần 2)"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/17/10/1700191207566/cf49daeccef8_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Ngày Hôm Nay Cũng Thật Đáng Yêu - A Good Day To Be A Dog"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/16/13/1700116881911/d3f87285a998_360_540.jpg" decoding="async"
                        />
                    </Link>
                </div>
                <div className='carousel-title'>
                        <div className='Carousel-heading'>
                        <Link to='/collections/movies/phim-b-trung-quc?c=41'>
                            <h2 className='css-pssmrm'>Phim Bộ Trung Quốc</h2>
                        </Link>
                        </div>
                </div>
                <div className='b-block-css'>
                    <Link to=''>
                        <img className='block-css'
                            alt="Võ Lâm Ngoại Truyện"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/21/09/161a031a/161a031a-acf8-4d8f-9219-58d4c9ec37c3_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Tương Dạ (Phần 2) - Ever Night (Season 2)"
                            src="https://img-zlr1.tv360.vn/image1/2023/01/05/23/b6ba4074/b6ba4074-b41f-4632-92bd-cac60d2f378b_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Ly Ca Hành - Court Lady"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/13/09/1699844389286/4ecdba55fb94_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Trầm Vụn Hương Phai - Immortal Samsara"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/19/08/1697679604642/09126cce0e86_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Huyền Thoại Lý Tiểu Long - Legend of Bruce Lee"
                            src="https://img-zlr1.tv360.vn/image1/2023/08/15/08/010b1b4e/010b1b4e-6cd2-447e-bad3-4e0f83836dc2_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Với Tôi Anh Là Người Nguy Hiểm - My Lethal Man"
                            src="https://img-zlr1.tv360.vn/image1/2023/09/29/09/3284a6f9/3284a6f9-ac46-42d6-b75a-3dcfdda58d75_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link to=''>
                        <img className='block-css'
                            alt="Lộc Đỉnh Ký - The Deer And The Cauldron"
                            src="https://img-zlr1.tv360.vn/image1/2023/08/15/08/438d849e/438d849e-d390-4f8b-b5ce-9c366ef6946b_360_540.jpg" decoding="async"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieCarousel;
