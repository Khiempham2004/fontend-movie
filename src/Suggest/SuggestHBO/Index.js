import { NavLink } from 'react-router-dom'
import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Style.css'

function SuggestHBO() {
    return (
        <section>
            <div className='Suggest'>
                <h4 className='Class-suggest'>Kênh TV</h4>
                <div>
                    <li className='suggest-img'>
                        <div>
                            <img
                                className='suggest-mdb'
                                src='https://img-zlr1.tv360.vn/image1/2021/10/04/02/163329112517/6cb3ef1d12de_480_270.png'
                                alt='HBO'
                            />
                        </div>
                        <div>
                            <img className='suggest-mdb'
                                alt="cinemax"
                                src="https://img-zlr1.tv360.vn/image1/2022/03/04/14/1646379975451/4829b770ef31_480_270.png"
                            />
                        </div>
                    </li>
                </div>
            </div>
            <div>
                <h2 className='suggest-heading'>Phim bom tấn</h2>
            </div>
            <div>
                <div className='suggest-carousel'>
                    <img className='img-suggest'
                        alt='Cỗ Máy Địa Ngục'
                        src='https://img-zlr1.tv360.vn/image1/2023/11/01/21/e8b6ada8/e8b6ada8-a570-41d2-8a9a-37a7a1556eb9_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='Gã Hề Ma Qúai : Chương 2 -It: Cheaper 2'
                        src='https://img-zlr1.tv360.vn/image1/2023/09/29/15/ad8e774f/ad8e774f-2916-44d3-8e5f-b96f886f0678_360_540.jpg'
                    />
                    <img />
                    <img className='img-suggest'
                        alt="Annabelle Về Nhà - Annabelle Comes Home"
                        src='https://img-zlr1.tv360.vn/image1/2023/09/19/14/ccb2392f/ccb2392f-6a1d-457e-ad95-7c50d2d1c31a_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='M3gan-M3gan'
                        src='https://img-zlr1.tv360.vn/image1/2023/09/28/18/ee12f512/ee12f512-feff-4e0b-b721-270fd56bcc19_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='Ngục tối & rồng: Danh Dự Giữa Đám Trộm'
                        src='https://img-zlr1.tv360.vn/image1/2023/09/09/01/a49e564e/a49e564e-fa4d-4662-b221-015ab2bf424f_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='SHAZAM : Cơn Thịnh Nộ Của Các Vị Thần'
                        src='https://img-zlr1.tv360.vn/image1/2023/09/09/01/7eba7b26/7eba7b26-af7e-448d-ad10-0fb1b4facbc6_360_540.jpg'
                    />
                </div>
            </div>
            <div>
                <h2 className='suggest-heading'>Phim mới ra mắt</h2>
            </div>
            <div>
                <div className='suggest-carousel'>
                    <img className='img-suggest'
                        alt='Cỗ Máy Địa Ngục'
                        src='https://img-zlr1.tv360.vn/image1/2023/11/02/02/c2dd2262/c2dd2262-9f73-4744-8a81-5bab64990a35_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='Gã Hề Ma Qúai : Chương 2 -It: Cheaper 2'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/28/14/d2cb430e/d2cb430e-3187-4d6a-b3cd-84475873181e_360_540.jpg'
                    />
                    <img />
                    <img className='img-suggest'
                        alt="Annabelle Về Nhà - Annabelle Comes Home"
                        src='https://img-zlr1.tv360.vn/image1/2023/10/28/19/544e9600/544e9600-a508-41ab-b92b-c226a6561ee0_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='M3gan-M3gan'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/13/16/51f4caa7/51f4caa7-d481-4258-9cae-eddb55a264d6_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='Ngục tối & rồng: Danh Dự Giữa Đám Trộm'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/28/19/4539dc2c/4539dc2c-dd30-4b78-93ef-aa574c5f9dd5_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='SHAZAM : Cơn Thịnh Nộ Của Các Vị Thần'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/28/14/217e88b9/217e88b9-6040-49f3-b088-8b5da52f3da7_360_540.jpg'
                    />
                </div>
            </div>
            <div>
                <h2 className='suggest-heading'>Thiếu nhi và gia đình</h2>
            </div>
            <div>
                <div className='suggest-carousel'>
                    <img className='img-suggest'
                        alt='Cỗ Máy Địa Ngục'
                        src='https://img-zlr1.tv360.vn/image1/2023/11/06/14/1699255396249/066fa0032f5f_360_540.jpeg'
                    />
                    <img className='img-suggest'
                        alt='Gã Hề Ma Qúai : Chương 2 -It: Cheaper 2'
                        src='https://img-zlr1.tv360.vn/image1/2023/11/06/14/1699255563278/533defb7ab3e_360_540.webp'
                    />
                    <img />
                    <img className='img-suggest'
                        alt="Annabelle Về Nhà - Annabelle Comes Home"
                        src='https://img-zlr1.tv360.vn/image1/2023/10/26/16/1698314363969/0e55f9f93982_360_540.jpeg'
                    />
                    <img className='img-suggest'
                        alt='M3gan-M3gan'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/26/17/1698314700851/f829a6cabd00_360_540.png'
                    />
                    <img className='img-suggest'
                        alt='Ngục tối & rồng: Danh Dự Giữa Đám Trộm'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/11/14/b300e49a/b300e49a-45dc-41ae-80cb-0e2fc3573491_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='SHAZAM : Cơn Thịnh Nộ Của Các Vị Thần'
                        src='https://img-zlr1.tv360.vn/image1/2023/10/26/17/1698314529426/242a9d55d30c_360_540.png'
                    />
                </div>
            </div>
            <div>
                <h2 className='suggest-heading'>Vũ trụ điện ảnh DC</h2>
            </div>
            <div>
                <div className='suggest-carousel'>
                    <img className='img-suggest'
                        alt='Cỗ Máy Địa Ngục'
                        src='https://img-zlr1.tv360.vn/image1/2023/08/09/20/cb5e6446/cb5e6446-21d6-4b2d-8fa4-674366dc3b91_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='Gã Hề Ma Qúai : Chương 2 -It: Cheaper 2'
                        src='https://img-zlr1.tv360.vn/image1/2023/08/09/20/24048d38/24048d38-2745-44d7-9eaa-e70c30562e86_360_540.jpg'
                    />
                    <img />
                    <img className='img-suggest'
                        alt="Annabelle Về Nhà - Annabelle Comes Home"
                        src='https://img-zlr1.tv360.vn/image1/2023/07/09/17/a871e951/a871e951-1ceb-4815-a6cd-f7b1e17afe88_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='M3gan-M3gan'
                        src='https://img-zlr1.tv360.vn/image1/2023/08/09/20/d8e7ca2b/d8e7ca2b-dd1c-4ee1-b2d2-a9b19be14104_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='Ngục tối & rồng: Danh Dự Giữa Đám Trộm'
                        src='https://img-zlr1.tv360.vn/image1/2022/03/31/12/34f4ce8c/34f4ce8c-b2cd-4d71-9064-7f1cb0fa9018_360_540.jpg'
                    />
                    <img className='img-suggest'
                        alt='SHAZAM : Cơn Thịnh Nộ Của Các Vị Thần'
                        src='https://img-zlr1.tv360.vn/image1/2023/02/14/14/3c09eace/3c09eace-2d3c-441b-bb89-af801adfec24_360_540.jpg'
                    />
                </div>
            </div>

        </section>
    );
}

export default SuggestHBO;