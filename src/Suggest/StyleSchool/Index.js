import React, { Component } from 'react'
import { useState } from 'react';
import './Style.css'
import { Link } from 'react-router-dom'
function StyleSchooll() {
    return (
        <div>
            <div>
                <h3 className='style-heading'>Truyền Hình</h3>
            </div>
            <div>
                <li className='style-img'>
                    <img className='style'
                        alt='Hải Phòng'
                        src='https://img-zlr1.tv360.vn/image1/2023/04/01/03/1680295707805/070985ac5a2d_480_270.png'
                    />
                    <img className='style'
                        alt='Hải Phòng'
                        src='https://img-zlr1.tv360.vn/image1/2023/04/01/03/1680295675250/0c0c92e3a460_480_270.png'
                    />
                </li>
            </div>
            <div>
                <h3 className='style-heading'>Tìm Kiếm Phim</h3>
            </div>
            <div>
                <li className='style-img'>
                    <Link to='/movie/truong-phong-do-destined?m=19861&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Trường Phong Độ'
                            src='https://img-zlr1.tv360.vn/image1/2023/09/04/15/1693815177953/6ee026bdeca6_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/tng-16-level-16?m=7738&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Hải Phòng'
                            src='https://img-zlr1.tv360.vn/image1/2021/06/14/08/dee4227b/dee4227b-bddf-4dac-9065-ea89990073b7_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/quan-truong-truong-quan?m=18442&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Sắc Phong'
                            src='https://img-zlr1.tv360.vn/image1/2023/02/22/08/1677029576139/b813ab016294_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/sac-phong?m=18451&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Quan trường - trường quan'
                            src='https://img-zlr1.tv360.vn/image1/2023/01/21/19/1674305725733/4406a9377d98_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/phong-van-2?m=15061&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Phong Vân 2'
                            src='https://img-zlr1.tv360.vn/image1/2022/04/27/09/736e0e0e/736e0e0e-20c0-4fc4-8166-18bbecc10e8c_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/loi-phong-thap?m=15082&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Lôi Phong Táp'
                            src='https://img-zlr1.tv360.vn/image1/2022/04/28/14/339deb01/339deb01-92db-47e7-b5df-e1e1bad5a6dc_360_540.jpg'
                        />
                    </Link>
                </li>
                <li className='style-img'>
                    <Link to='/movie/bang-phong-than?m=15139&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Bảng Phong Thần'
                            src='https://img-zlr1.tv360.vn/image1/2022/05/19/11/d2d3aa10/d2d3aa10-91b2-470b-99b4-d824b38987b0_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/bao-phong-nhan-storm-eye?m=6502&col=film_search&sect=FILM&page=search'> 
                        <img className='style'
                            alt='Bạo Phong Nhãn'
                            src='https://img-zlr1.tv360.vn/image1/2023/03/24/17/1679653761339/e3162d034280_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/ma-toc-do-ghost-rider?m=21556&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Ma Tốc Độ'
                            src='https://img-zlr1.tv360.vn/image1/2023/11/14/09/1699929648310/c3a4739e6756_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/tay-dua-sieu-toc-do-gearheads?m=8293&col=film_search&sect=FILM&page=search'> 
                        <img className='style'
                            alt='Tay Đua Siêu Tốc'
                            src='https://img-zlr1.tv360.vn/image2/2020_07_29/1596015566506/4dd860044765_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/thieu-nu-toan-phong-the-whirlwind-girl?m=17941&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Thiếu Nữ Toàn Phong'
                            src='https://img-zlr1.tv360.vn/image1/2023/03/30/11/1680150231829/e0faa566f8a8_360_540.jpg'
                        />
                    </Link>
                    <Link to='/movie/tinh-truong-khoi-lua?m=7552&col=film_search&sect=FILM&page=search'>
                        <img className='style'
                            alt='Tình Trường Khói Lửa'
                            src='https://img-zlr1.tv360.vn/image1/2023/03/16/16/1678958801191/88c8a982b0e6_360_540.jpg'
                        />
                    </Link>
                </li>
            </div>
        </div>
    );
}

export default StyleSchooll;