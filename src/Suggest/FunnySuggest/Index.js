import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import './Style.css'


function FunnySuggest() {
    return (
        <div>
            <div>
                <h2 className='Funny'>Tìm kiếm phim</h2>
            </div>
            <div>
                <li className='Funny-suggest'>
                    <Link>
                        <img className='Funny-img'
                            alt='Đảo trại hè'
                            src='https://img-zlr1.tv360.vn/image1/2022/06/23/14/5439b352/5439b352-9f64-4df4-ae80-e48de14db2cc_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Funny-img'
                            alt='Một Lời Hẹn Hò'
                            src='https://img-zlr1.tv360.vn/image1/2023/05/16/08/1684201121243/9d1fa17cf7e7_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Funny-img'
                            alt='Bài ca ra trận'
                            src='https://img-zlr1.tv360.vn/image1/2023/04/20/11/1681966088143/65cfa0249c13_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Funny-img'
                            alt='Lối Thoái trên không'
                            src='https://img-zlr1.tv360.vn/image1/2020_06_25/1593049333904/e78c9765cfd3_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Funny-img'
                            alt='Át Chủ Bài'
                            src='https://img-zlr1.tv360.vn/image1/2023/09/18/09/1695003619621/de828d47ace1_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='Funny-img'
                            alt='Vua Bài - King of Cards'
                            src='https://img-zlr1.tv360.vn/image1/2023/07/10/19/1688993694396/80c528fc810d_360_540.jpg'
                        />
                    </Link>
                </li>
            </div>
            <div>
                <li className='Funny-suggest'>
                    <Link>
                        <img className='Funny-img'
                            alt="Khúc Hát Ở Parkland - Song Of Parkland" 
                            src='https://img-zlr1.tv360.vn/image1/2022/04/01/09/f48cdb0a/f48cdb0a-7f31-43a2-a696-cf011c4692c2_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img  className='Funny-img'
                        alt="Hãy Hát Lên Phần 2 - Sing 2"
                            src='https://img-zlr1.tv360.vn/image1/2022/10/29/01/b191fa01/b191fa01-9f66-4f25-9d65-e15de81b5a06_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img  className='Funny-img'
                        alt='Công Tố Viên Quân Sự'
                            src='https://img-zlr1.tv360.vn/image1/2022/02/25/17/9f5a7ed8/9f5a7ed8-ac9e-4c8e-9b3a-18d2e6070a3a_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img  className='Funny-img'
                        alt='Thần Bài 3'
                            src='https://img-zlr1.tv360.vn/image1/2022/08/03/15/7348d23c/7348d23c-a99b-4791-b4af-a74013d8b85a_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img  className='Funny-img'
                            alt='Bài Ca Ra Trận'
                            src='https://img-zlr1.tv360.vn/image1/2023/04/20/11/1681966088143/65cfa0249c13_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img  className='Funny-img'
                            alt='Kỳ Nghỉ - Vacation'
                            src='https://img-zlr1.tv360.vn/image1/2023/06/09/10/9fc3cb82/9fc3cb82-5c19-46cb-99a0-a2849346cf3a_360_540.jpg'
                        />
                    </Link>
                </li>
            </div>
        </div>
    );
}

export default FunnySuggest;