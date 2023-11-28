import { Link } from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import './TVComponet.css'
function TVComponent() {
    return (
        <div>
            <div className='TV-moive'>
                <h2 className='TV-heading'>Yêu Thích</h2>
            </div>
            <div className='TV-vtv'>
                <li className='TV-img'>
                    <div itemID={1}>
                        <img className='TV-Carousel'
                            alt="vtv2"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822532144/64430eab8048_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={2}>
                        <img className='TV-Carousel'
                            alt="VTV3| Trực tiếp bóng đá Euro2020"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822363854/4e5e7832df14_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={3}>
                        <img className='TV-Carousel'
                            alt="VTV9 HD"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822568115/7f3b077aabfc_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={4}>
                        <img className='TV-Carousel'
                            alt="Vĩnh Long 1"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822173135/5e85887aa099_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={5}>
                        <img className='TV-Carousel'
                            alt="Vĩnh Long 2"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822181202/ddd05dbe2ec4_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={6}>
                        <img className='TV-Carousel'
                            alt="VTV4 HD"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822540493/79943158bdd1_480_270.png" decoding="async"
                        />
                    </div>
                </li>
            </div>
            <div>
                <h2 className='TV-header'>Kênh VTV</h2>
            </div>
            <div>
                <li className='TV-image'>
                    <div itemID={1}>
                        <img className='img-effect'
                            alt="VTV1 HD | Xem truyền hình trực tuyến VTV1 HD | TV360"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822355845/94d27f7043a6_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={2}>
                        <img className='img-effect'
                            alt="vtv2"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822532144/64430eab8048_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={3}>
                        <img className='img-effect'
                            alt="VTV3| Trực tiếp bóng đá Euro2020"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822363854/4e5e7832df14_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={4}>
                        <img className='img-effect'
                            alt="VTV4 HD"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822540493/79943158bdd1_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={5}>
                        <img className='img-effect'
                            alt="vtv5"
                            src="https://img-zlr1.tv360.vn/image1/2023/06/15/08/1686794357811/c08ce385651d_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={6}>
                        <img className='img-effect'
                            alt="VTV5 Tây Nguyên"
                            src="https://img-zlr1.tv360.vn/image1/2023/05/08/10/1683515444588/34459b1f8ea5_480_270.png" decoding="async"
                        />
                    </div>
                </li>
                <li className='Component-image'>
                    <div>
                        <img className='component-effect'
                            alt="VTV5 Tây Nam Bộ"
                            src="https://img-zlr1.tv360.vn/image1/2023/05/08/10/1683515518939/7cb734c81a19_480_270.png" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='component-effect'
                            alt="Truyen-hinh-VTV-Can-Tho-HD"
                            src="https://img-zlr1.tv360.vn/image1/2023/05/08/10/1683515328910/959609c1af01_480_270.png" decoding="async"
                        />
                    </div>
                    <div>
                        <img className='component-effect'
                            alt="VTV7 HD"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822556953/09c028dc8443_480_270.png" decoding="async"
                        />
                    </div>
                    <div>
                    <img className='component-effect'
                    alt="VTV8 HD" 
                    src="https://img-zlr1.tv360.vn/image1/2020_09_21/160069439043/38ef3b4d4000_480_270.png" decoding="async"
                    />
                    </div>
                    <div>
                    <img className='component-effect'
                    alt="VTV9 HD" 
                    src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822568115/7f3b077aabfc_480_270.png" decoding="async" 
                    />
                    </div>
                </li>
            </div>
        </div>
    );
}

export default TVComponent;