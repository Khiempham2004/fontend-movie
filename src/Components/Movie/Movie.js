import React from 'react';
import { useState } from 'react';
import './Movie.css'
import { Link } from 'react-router-dom'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

function ComponentMovies() {
    return (
        <div>
            <div className='classMovie'>
                <div className='classMovie' >
                    <div className='propose-title'>
                        <Link to='/movies?page=home&id=recommend_film'>
                            <h2 className='class-movie'>Phim Đề Xuất</h2>
                        </Link>
                    </div>
                    <div className='propose-context'>
                        <li className='Movie-image'>
                            <div>
                                <img className='Movies-suggest'
                                    src="https://img-zlr1.tv360.vn/image1/2023/10/26/08/1698282328137/9aa735e2280d_360_540.jpg"
                                    alt='Chuyện Tình Notting Hill'
                                />
                            </div>

                            <div>
                                <img className='Movies-suggest'
                                    src="https://img-zlr1.tv360.vn/image1/2022/08/16/16/f9eee2aa/f9eee2aa-e9bc-4d71-b6cd-40b9e25adcd5_360_540.jpg"
                                    alt='Người Hoobit : Đại Chiến 5 Cánh Quân'
                                />
                            </div>
                            <div>
                                <img className='Movies-suggest'
                                    alt="phim hành động"
                                    src="https://img-zlr1.tv360.vn/image1/2023/02/14/16/1676365685185/2c0a6980f5a0_360_540.jpg"
                                />
                            </div>
                            <div>
                                <img className='Movies-suggest'
                                    alt="Tiến Sĩ Đá (Phần 3) - Dr. Stone (Season 3)"
                                    src="https://img-zlr1.tv360.vn/image1/2023/10/25/15/1698222632849/c18855ebe609_360_540.jpg"
                                />
                            </div>
                            <div>
                                <img className='Movies-suggest'
                                    alt="Thanh Gươm Diệt Quỷ - Kỹ Viện Trấn - Demon Slayer: Kimetsu No Yaiba Entertainment District Arc"
                                    src="https://img-zlr1.tv360.vn/image1/2023/02/15/09/1676426466825/cb6f4a2c6bff_360_540.jpg"
                                />
                            </div>

                            <div>
                                <img className='Movies-suggest'
                                    alt="Tân Thần Điêu Đại Hiệp - The Romance Of The Conder Heroes"
                                    src="https://img-zlr1.tv360.vn/image1/2023/10/04/09/1696384844690/815c39ed38f0_360_540.jpg"
                                />
                            </div>
                        </li>
                        <li className='Movie-image'>
                            <div>
                                <img className='Movies-class'
                                    alt="Trường Nguyệt Tẫn Minh - Till The End Of The Moon"
                                    src="https://img-zlr1.tv360.vn/image1/2023/08/30/11/1693368082989/cdda2919f76f_360_540.jpg"
                                />
                            </div>
                            <div>
                                <img className='Movies-class'
                                    alt="Đô Rê Mon: Đôi Bạn Thân - Stand by Me Doraemon"
                                    src="https://img-zlr1.tv360.vn/image1/2023/08/09/15/1691568503776/6be9832df4e9_360_540.jpg"
                                />
                            </div>
                            <br></br>
                            <div>
                                <img className='Movies-class'
                                    alt="Thanh Gươm Diệt Quỷ: Phần Làng Rèn Kiếm - Demon Slayer Swordsmith Village Arc"
                                    src="https://img-zlr1.tv360.vn/image1/2023/04/11/10/168118284171/b051259c51b1_360_540.jpg"
                                />
                            </div>
                            <div>
                                <img className='Movies-class'
                                    alt="Tân Tiếu Ngạo Giang Hồ (2013) - Swordsman"
                                    src="https://img-zlr1.tv360.vn/image1/2023/08/18/16/1692352344605/0fa3c89678db_360_540.jpg"
                                />
                            </div>
                            <div>
                                <img className='Movies-class'
                                    alt="Khói Lửa Nhân Gian - Chef Hua"
                                    src="https://img-zlr1.tv360.vn/image1/2023/11/10/09/54922dd1/54922dd1-58c6-4f8d-b340-a2e8408e4813_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div>
                                <img className='Movies-class'
                                    alt="Ngân Hà Lấp Lánh - Love Like The Galaxy"
                                    src="https://img-zlr1.tv360.vn/image1/2023/11/13/17/1699872938872/eafe5e7d0c76_360_540.jpg" decoding="async"
                                />
                            </div>
                        </li>
                    </div>
                </div>
            </div>
            <div className='Carousel'>
                <div className='carousel-title'>
                    <div className='Carousel-heading'>
                        <Link to='/collections/movies/phim-song-song-moi-ra-mat?c=5'>
                            <h2 className='css-pssmrm'>Phim song song & mới ra mắt</h2>
                        </Link>
                    </div>
                </div>
                <div className='b-block-css'>
                    <li className='Movie-image'>
                        <div >
                            <img className='Movies-suggest'
                                alt="Tháng 11 xem gì?"
                                src="https://img-zlr1.tv360.vn/image1/2023/10/27/11/9380d485/9380d485-7f99-45d3-be14-4ea36bf89aa4_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-suggest'
                                alt="Hợp Đồng Hôn Nhân Của Cô Park - The Story of Park's Marriage Contract"
                                src="https://img-zlr1.tv360.vn/image1/2023/11/03/15/0037bba2/0037bba2-c678-4ebe-8716-c69491c8c896_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-suggest'
                                alt="Tình Yêu Vô Diện - Faceless Love"
                                src="https://img-zlr1.tv360.vn/image1/2023/11/08/09/1699409491930/f99c6866fc84_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-suggest'
                                alt="Điền Canh Kỷ - Romance On The Farm"
                                src="https://img-zlr1.tv360.vn/image1/2023/10/25/10/1698205864950/e1201aa8f4a1_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-suggest'
                                alt="Gieo Gì Gặt Nấy - GBRB Reap What You Sow"
                                src="https://img-zlr1.tv360.vn/image1/2023/10/13/15/a6c460a8/a6c460a8-693a-43c6-8a75-8dfabbcda0f3_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-suggest'
                                alt="Người Yêu Dấu - My Dearest (Phần 2)"
                                src="https://img-zlr1.tv360.vn/image1/2023/11/17/10/1700191207566/cf49daeccef8_360_540.jpg" decoding="async"
                            />
                        </div>
                    </li>
                    <li className='Movie-image'>
                        <div>
                            <img className='Movies-class'
                                alt="Vân Chi Vũ - My Journey To You"
                                src="https://img-zlr1.tv360.vn/image1/2023/09/07/14/1694072510212/ada857b2641a_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-class'
                                alt="Bảy Kiếp May Mắn - Love You Seven Times"
                                src="https://img-zlr1.tv360.vn/image1/2023/08/09/10/2e754271/2e754271-d27f-497b-9cb2-b4301ffeb555_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-class'
                                alt="Ngày Hôm Nay Cũng Thật Đáng Yêu - A Good Day To Be A Dog"
                                src="https://img-zlr1.tv360.vn/image1/2023/11/16/13/1700116881911/d3f87285a998_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-class'
                                alt="Tình Yêu Vô Diện - Faceless Love"
                                src="https://img-zlr1.tv360.vn/image1/2023/11/08/09/1699409491930/f99c6866fc84_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-class'
                                alt="Đại Chiến Titan Mùa Cuối Phần 3 (Nửa Sau) - Attack on Titan Final Season Part 3 (Second Half)"
                                src="https://img-zlr1.tv360.vn/image1/2023/11/07/15/1699345581633/11af9f451c76_360_540.jpg" decoding="async"
                            />
                        </div>
                        <div>
                            <img className='Movies-class'
                                alt="Ngôi Trường Bí Ẩn - Homeschool"
                                src="https://img-zlr1.tv360.vn/image1/2023/06/08/13/dbf66797/dbf66797-490e-4083-9728-6db7e9ab1bee_360_540.jpg" decoding="async"
                            />
                        </div>

                    </li>
                </div>
            </div>
            <div className='classMovie-carousel'>
                <div className='Movie-Classmovie'>
                    <div>
                        <Link to='/danhriengchoban'>
                            <h2 className='movie-heading'>Dành riêng cho bạn</h2>
                        </Link>
                    </div>
                    <div className='clasMovie-carousel'>
                        <li className='carousel-image'>
                            <div itemID={1}>
                                <img className='moive-carousel'
                                    alt="Cảm Ơn Thầy - Thank You Teacher"
                                    src="https://img-zlr1.tv360.vn/image1/2023/07/13/17/5f07bd2f/5f07bd2f-972b-49c0-9c60-536c992fa3b6_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={2}>
                                <img className='moive-carousel'
                                    alt="Đại Đường Vinh Diệu - The Glory of Tang Dynasty"
                                    src="https://img-zlr1.tv360.vn/image1/2023/04/30/17/168284947332/d4b528ef2a91_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={3}>
                                <img className='moive-carousel'
                                    alt="Cậu Út Nhà Tài Phiệt - Reborn Rich"
                                    src="https://img-zlr1.tv360.vn/image1/2023/02/16/13/1676530159407/b89dc2013f9e_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={4}>
                                <img className='moive-carousel'
                                    alt="Thầy Lang Trúng mánh - Thong Ek - The Herbal Master"
                                    src="https://img-zlr1.tv360.vn/image1/2021/02/28/08/b9d9fae6/b9d9fae6-5e3a-40d2-af1d-773f9ae309d1_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={5}>
                                <img className='moive-carousel'
                                    alt="Người Vợ Lửa - Lady's Vendetta&nbsp;"
                                    src="https://img-zlr1.tv360.vn/image1/2023/02/24/08/1677203148533/7a65bae8bddd_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={6}>
                                <img className='moive-carousel'
                                    alt="Tương Dạ (Phần 2) - Ever Night (Season 2)"
                                    src="https://img-zlr1.tv360.vn/image1/2023/01/05/23/b6ba4074/b6ba4074-b41f-4632-92bd-cac60d2f378b_360_540.jpg" decoding="async"
                                />
                            </div>
                        </li>
                        <li className='carousel-class'>
                            <div itemID={7}>
                                <img className='classMovie-img'
                                    alt="Anh Hào Nam Thiếu Lâm - Hero of South Shaolin"
                                    src="https://img-zlr1.tv360.vn/image1/2023/03/15/17/1678875958402/9223c7fb83dc_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={8}>
                                <img className='classMovie-img'
                                    alt="Chuyện Tình Dưới Ánh Trăng - The Moon Britens For You"
                                    src="https://img-zlr1.tv360.vn/image1/2023/02/20/15/1676882894854/19073cc0a4a9_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={9}>
                                <img className='classMovie-img'
                                    alt="Công Chúa Bán Yêu (Phần 1) - Yashahime: Princess Half-Demon"
                                    src="https://img-zlr1.tv360.vn/image1/2023/04/10/14/1681111293362/166c639d1750_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={10}>
                                <img className='classMovie-img'
                                    alt="Ai Cũng Biết Em Yêu Anh - Almost Lover"
                                    src="https://img-zlr1.tv360.vn/image1/2022/10/26/16/062c2eab/062c2eab-d233-446c-a8cb-605d06ff5897_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={11}>
                                <img className='classMovie-img'
                                    alt="Công Tố Viên Lách Luật - Bad Prosecutor"
                                    src="https://img-zlr1.tv360.vn/image1/2023/02/24/08/167720169872/a77d0ab6bbce_360_540.jpg" decoding="async"
                                />
                            </div>
                            <div itemID={12}>
                                <img className='classMovie-img'
                                    alt="Quán Cà Phê Luật - The Law Cafe"
                                    src="https://img-zlr1.tv360.vn/image1/2022/09/09/10/1662693889630/c403f57a630d_360_540.jpg" decoding="async"
                                />
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>);
}

export default ComponentMovies;