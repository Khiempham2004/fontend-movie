import { Link } from 'react-router-dom'
import React from 'react';
import './Style.css'
function SuggestOasis() {
    return ( 
        <div>
            <div>
                <h2 className='Suggest-Oasis'>Truyền Hình</h2>
            </div>
            <div>
                <li className='Oasis'>
                    <Link>
                        <img className='Oasis-img'
                            alt='VTV Thanh Hóa'
                            src='https://img-zlr1.tv360.vn/image1/2020_09_23/1600821878406/58ff77e57117_480_270.png'
                        />
                    </Link>
                </li>
            </div>
            <div>
                <h2 className='Suggest-Oasis'>Tìm Kiếm Phim</h2>
            </div>
            <div>
                <li className='Oasis'>
                    <Link>
                        <img className='Oasis-img'
                            alt='Ôc Đảo Thanh Xuân'
                            src='https://img-zlr1.tv360.vn/image1/2023/03/20/17/1679306794310/b0bcd2794d04_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                            alt='Giữa Thanh Xuân'
                            src='https://img-zlr1.tv360.vn/image1/2021/01/26/16/1611655184777/6934e8c6b83d_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                            alt='Thanh Xuân Cuồng Nhiệt'
                            src='https://img-zlr1.tv360.vn/image1/2022/04/07/17/3f986bef/3f986bef-b20d-41da-a513-d5ea191ad24e_360_540.png'
                        />
                    </Link>
                    <Link> 
                        <img className='Oasis-img'
                            alt='Thanh Xuân Không Bó Buộc'
                            src='https://img-zlr1.tv360.vn/image1/2023/08/18/15/1692347152657/327553ee6012_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                        alt='Thanh Xuân Vật Vã'
                            src='https://img-zlr1.tv360.vn/image1/2023/03/29/10/1680059855255/e229120c2d86_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                            alt='Thời Thanh Xuân Của Chúng Ta'
                            src='https://img-zlr1.tv360.vn/image1/2023/05/25/15/f8dd9ee2/f8dd9ee2-5ffb-4190-a09e-c7582b8403d0_360_540.jpg'
                        />
                    </Link>
                </li>
                <li className='Oasis'>
                    <Link>
                        <img className='Oasis-img'
                            alt='Thanh Xuân Không Sợ Hãi'
                            src='https://img-zlr1.tv360.vn/image1/2021/12/15/10/1639539816605/873db0982678_360_540.png'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                            alt='Làm Rể Mười Xuân'
                            src='https://img-zlr1.tv360.vn/image1/2022/12/29/01/2811f703/2811f703-fbe6-47f5-8d94-e886d80c9c88_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                            alt='Thanh Xuân Cuồng Nhiệt'
                            src='https://img-zlr1.tv360.vn/image1/2023/01/18/16/1674033265712/e2aae038b96c_360_540.png'
                        />
                    </Link>
                    <Link> 
                        <img className='Oasis-img'
                            alt='Bầu Vật Ngày Xuân'
                            src='https://img-zlr1.tv360.vn/image1/2023/06/05/16/1685958418877/da9625d41e46_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                        alt='Đảo Săn Mồi'
                            src='https://img-zlr1.tv360.vn/image1/2020/10/26/09/d70737de/d70737de-2f26-4e0b-9c0f-36e0843d3bc6_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Oasis-img'
                            alt='Thời Thanh Xuân Của Chúng Ta'
                            src='https://img-zlr1.tv360.vn/image1/2023/01/30/22/d44124bb/d44124bb-a6aa-44fc-9ee0-fe108cb50668_360_540.jpg'
                        />
                    </Link>
                </li>
            </div>
        </div>
     );
}

export default SuggestOasis;