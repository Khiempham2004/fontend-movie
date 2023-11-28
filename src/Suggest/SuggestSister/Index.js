import { Link } from 'react-router-dom'
import React from 'react';
import './Style.css'

function SuggestSister() {
    return ( 
        <div>
            <div>
                <h2 className='sister-heading'>Tìm Kiếm Phim</h2>
            </div>
            <div>
                <li className='Sister-img'>
                <Link to=''>
                    <img className='sister-link'
                        alt=''
                        src='https://img-zlr1.tv360.vn/image1/2023/05/23/16/9c2a64bb/9c2a64bb-96bd-4ce4-9d24-871b7ead76be_360_540.jpg'
                    />
                    </Link>
                    <Link to=''>
                    <img  className='sister-link'
                        alt='Đại trình phá'
                        src='https://img-zlr1.tv360.vn/image1/2023/08/07/13/1691389392523/f4c16529af25_360_540.jpg'
                    />
                    </Link>
                    <Link to=''>
                        <img  className='sister-link'
                            alt='Đại ca học đường'
                            src='https://img-zlr1.tv360.vn/image1/2023/02/02/14/1675322450253/82b3373003c9_360_540.jpg'
                        />
                    </Link>
                    <Link to=''>
                        <img  className='sister-link'
                            alt='Thanh lạc -Qing Luo'
                            src='https://img-zlr1.tv360.vn/image1/2023/02/14/16/1676366852472/d1bf50c460cb_360_540.jpg'
                        />
                    </Link>
                    <Link to=''>
                        <img  className='sister-link'
                            alt='Bạn có học đại học không'
                            src='https://img-zlr1.tv360.vn/image1/2021/06/15/09/4603977c/4603977c-15a2-4007-867b-4af126b72cdc_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='sister-link'
                            alt='Chị em - Sisters'
                            src='https://img-zlr1.tv360.vn/image1/2023/09/28/18/44a3f9dc/44a3f9dc-0f0f-42d4-9644-f37830c490d0_360_540.jpg'
                        />
                    </Link>
                </li>
                <li className='Sister-img'>
                <Link to=''>
                    <img className='sister-link'
                        alt='Cớm học đường'
                        src='https://img-zlr1.tv360.vn/image1/2023/05/15/17/1684145818310/74748f56a263_360_540.jpg'
                    />
                    </Link>
                    <Link to=''>
                    <img  className='sister-link'
                        alt='Án Mang Hoc Duong'
                        src='https://img-zlr1.tv360.vn/image1/2023/03/30/13/1680159338868/86f509a3985a_360_540.jpg'
                    />
                    </Link>
                    <Link to=''>
                        <img  className='sister-link'
                            alt='Cớm học đường'
                            src='https://img-zlr1.tv360.vn/image1/2023/04/07/14/1680851588166/7a451495727a_360_540.jpg'
                        />
                    </Link>
                    <Link to=''>
                        <img  className='sister-link'
                            alt='Le Hap Duong Phen'
                            src='https://img-zlr1.tv360.vn/s2-image3/2020_05_13/1589355637845/bf005b05d13d_360_540.jpg'
                        />
                    </Link>
                    <Link to=''>
                        <img  className='sister-link'
                            alt='Vuon Phu Dung Dai Duong'
                            src='https://img-zlr1.tv360.vn/image1/2023/02/21/10/1676948446379/717f99ff69cb_360_540.jpg'
                        />
                    </Link>
                    <Link>
                        <img className='sister-link'
                            alt='Dai Duong Vinh Dieu'
                            src='https://img-zlr1.tv360.vn/image1/2023/04/30/17/168284947332/d4b528ef2a91_360_540.jpg'
                        />
                    </Link>
                </li>
            </div>
        </div>
    );
}

export default SuggestSister;