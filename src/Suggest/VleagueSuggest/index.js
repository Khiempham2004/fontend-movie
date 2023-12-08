import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Style.css'
function VleagueSuggest() {
    return ( 
        <div>
        <div>
            <h2 className='Vleague-heading'>Truyền Hình</h2>
        </div>
        <div>
            <li className='V-league'>
                <Link>
                    <img className='Vleague-suggest'
                        alt='VTVCab 20'
                        src='https://img-zlr1.tv360.vn/image1/2023/07/19/09/1689732486538/904f55c861b5_480_270.png'
                    />
                </Link>
            </li>
        </div>
        <div>
            <h2 className='Vleague-heading'>Tìm Kiếm Phim</h2>
        </div>
        <div>
            <li className='V-league'>
                <Link to=''>
                    <img className='Vleague-suggest'
                        alt='Allen V. Farrow P1'
                        src='https://img-zlr1.tv360.vn/image1/2022/03/31/12/6c2f6195/6c2f6195-49e8-4c6e-96ae-27ab3e95d55b_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Ma Cà Rồng Báo Thù'
                        src='https://img-zlr1.tv360.vn/image1/2023/04/25/17/a8caf38e/a8caf38e-823f-4bd5-a0a5-a7ee997a20a8_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Vụ Kiện Giữa Mann Và Ford - Mann V. Ford'
                        src='https://img-zlr1.tv360.vn/image1/2022/04/01/13/2ec21182/2ec21182-3aa4-4db4-9436-246081e9b49b_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Justice League P2'
                        src='https://img-zlr1.tv360.vn/image1/2022/03/31/12/ec4b5410/ec4b5410-66e5-4bb5-8569-5977b5e98b30_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Fever Pitch'
                        src='https://img-zlr1.tv360.vn/image1/2023/02/02/14/1675322034914/ba858ca6906e_360_540.png'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Cuộc Vây Bắt'
                        src='https://img-zlr1.tv360.vn/image1/2023/04/07/11/1680840908249/1a580391313b_360_540.jpg'
                    />
                </Link>
            </li>
            <li className='V-league'>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Huyền Thoại Kungfu'
                        src='https://img-zlr1.tv360.vn/image1/2020_06_25/1593049315591/eada4f9a9364_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Liên Minh Công Lý'
                        src='https://img-zlr1.tv360.vn/image1/2022/12/09/10/9ba453b4/9ba453b4-3317-4bf4-a844-3e90ba254519_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Đội Bóng Chày Dreams - Stove League'
                        src='https://img-zlr1.tv360.vn/image1/2023/03/24/10/167963006135/c7f3a68c2297_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Liên Minh Siêu Thú Dc - Dc League Of Super-pets'
                        src='https://img-zlr1.tv360.vn/image1/2023/01/28/03/da5d868b/da5d868b-82e0-427d-9950-7870fbc5598e_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt='Bộ Ba Vệ Sĩ - Tripple Threat'
                        src='https://img-zlr1.tv360.vn/image1/2023/04/07/11/1680840540619/a2c345958f0d_360_540.jpg'
                    />
                </Link>
                <Link>
                    <img className='Vleague-suggest'
                        alt="Đối Đầu Với Taylor Swift - Taking On Taylor Swift"
                        src='https://img-zlr1.tv360.vn/image1/2023/11/10/15/2d787108/2d787108-6bb1-4e22-b3e1-be1fc2824445_360_540.jpg'
                    />
                </Link>
            </li>

        </div>
        </div>
     );
}

export default VleagueSuggest;