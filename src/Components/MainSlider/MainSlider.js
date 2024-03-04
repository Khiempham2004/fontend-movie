import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './MainSlider.css'

function MainSlider() {
    // const slides = [
        
    // ]
    // const [slideIndex, setSlideIndex] = useState(0);

    // const nextSlide = () => {
    //     setSlideIndex((slideIndex + 1) % slides.length);
    // };

    // const prevSlide = () => {
    //     setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
    // };

    // // Lắng nghe phím mũi tên sang phải
    // document.addEventListener("keydown", event => {
    //     if (event.keyCode === 39) {
    //         nextSlide();
    //     }
    // });

    // // Lắng nghe phím mũi tên sang trái
    // document.addEventListener("keydown", event => {
    //     if (event.keyCode === 37) {
    //         prevSlide();
    //     }
    //     const updateSlide = () => {
    //         setSlideIndex((slideIndex + 1) % slides.length);
    //       };
          
    //       const interval = setInterval(updateSlide, 2000);
          
    //       // Tắt interval khi người dùng nhấp vào slide
    //       document.addEventListener("click", event => {
    //         if (event.target.classList.contains("slide")) {
    //           clearInterval(interval);
    //         }
    //       });
    // });

return (
    <section>
        <div  className='contextSlider'>
            <div className='contextSlider-main'>
                <div className='context-view'>
                    <Link to='/collections/movies/xem-nhieu-nhat-tren-tv360?c=481'>
                        <h2 className='Context-heading'>Xem nhiều nhất trên TV360</h2>
                    </Link>
                </div>
                <div className='consion-main'>
                <div>
                    {/* <MDBCarousel showControls >
                            <MDBCarouselItem  >
                                <img src='https://img-zlr1.tv360.vn/image1/2023/10/27/14/169839107337/2447cacc55ba_360_540.jpg' className='d-block w-100' alt='...' />
                            </MDBCarouselItem>
                            <MDBCarouselItem >
                                <img src='https://img-zlr1.tv360.vn/image1/2023/11/17/10/1700191207566/cf49daeccef8_360_540.jpg' className='d-block w-100' alt='...' />
                            </MDBCarouselItem>
                            <MDBCarouselItem >
                                <img src='https://img-zlr1.tv360.vn/image1/2023/11/13/17/1699872938872/eafe5e7d0c76_360_540.jpg' className='d-block w-100' alt='...' />
                            </MDBCarouselItem>
                        </MDBCarousel> */}
                </div>
                    <Link>
                        <img className='d-block'
                            src="https://img-zlr1.tv360.vn/image1/2023/10/27/14/169839107337/2447cacc55ba_360_540.jpg" decoding="async"
                            alt='Người Nhện Siêu Đẳng'
                        />
                    </Link>
                    <Link >
                        <img className='d-block'
                            alt="Người Yêu Dấu - My Dearest (Phần 2)"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/17/10/1700191207566/cf49daeccef8_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link >
                        <img className='d-block'
                            alt="Ngân Hà Lấp Lánh - Love Like The Galaxy"
                            src="https://img-zlr1.tv360.vn/image1/2023/11/13/17/1699872938872/eafe5e7d0c76_360_540.jpg" decoding="async"
                        />
                    </Link>

                    <Link >
                        <img className='d-block'
                            alt="Ngọt Ngào Rực Rỡ - Twinkling Watermelon"
                            src="https://img-zlr1.tv360.vn/image1/2023/09/28/14/1695885514141/7ceb0a41dc5f_360_540.jpg" decoding="async"
                        />
                    </Link>

                    <Link >
                        <img className='d-block'
                            alt="Vân Chi Vũ - My Journey To You"
                            src="https://img-zlr1.tv360.vn/image1/2023/09/07/14/1694072510212/ada857b2641a_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link>
                        <img className='d-block'
                            alt="Tân Thần Điêu Đại Hiệp - The Romance Of The Conder Heroes"
                            src="https://img-zlr1.tv360.vn/image1/2023/10/04/09/1696384844690/815c39ed38f0_360_540.jpg" decoding="async"
                        />
                    </Link>
                    <Link >
                        <img className='d-block'
                            alt="Đừng Nói Dối Em - My Lovely Liar"
                            src="https://img-zlr1.tv360.vn/image1/2023/07/24/08/1690162259474/adb1472a2f6d_360_540.jpg" decoding="async"
                        />
                    </Link>
                </div>
            </div>
            <div className='Slides'>
            {/* <button className="context-left" onclick="plusDivs(-1)">&#10094;</button>
            <button className="context-right" onclick="plusDivs(1)">&#10095;</button> */}   
            </div>
        </div>
    </section>
);
}

export default MainSlider;