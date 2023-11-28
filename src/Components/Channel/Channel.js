import { Link } from 'react-router-dom'
import React from 'react'
import './Channel.css'

function Channel() {
    return (
        <div>
            <div className='Channel-header'>
                <div className='Channel-title'>
                    <Link to='/tv'>
                        <h2 className='Channel-heading'>Kênh TV</h2>
                    </Link>
                </div>
                <br></br>
                <div className='Channel-context'>
                    <div itemID={1}>
                        <img className='channel-block-css'
                            alt="vtv2"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822532144/64430eab8048_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={2}>
                        <img className='channel-block-css' 
                            alt="VTV3| Trực tiếp bóng đá Euro2020"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822363854/4e5e7832df14_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={3}>
                        <img className='channel-block-css'
                            alt="VTV9 HD"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822568115/7f3b077aabfc_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={4}>
                        <img className='channel-block-css'
                            alt="Vĩnh Long 1"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822173135/5e85887aa099_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={5}>
                        <img className='channel-block-css'
                            alt="Vĩnh Long 2"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822181202/ddd05dbe2ec4_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={6}>
                        <img className='channel-block-css'
                            alt="VTV4 HD"
                            src="https://img-zlr1.tv360.vn/image1/2020_09_23/1600822540493/79943158bdd1_480_270.png" decoding="async"
                        />
                    </div>
                    {/* <div itemID={7}>
                        <img className='channel-block-css'
                            alt="vtv5"
                            src="https://img-zlr1.tv360.vn/image1/2023/06/15/08/1686794357811/c08ce385651d_480_270.png" decoding="async"
                        />
                    </div>
                    <div itemID={8}>
                        <img className='channel-block-css'
                            alt="HTV Thể Thao" 
                            src="https://img-zlr1.tv360.vn/image1/2023/04/03/16/1680514594557/ab2557f0b015_480_270.png" decoding="async"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Channel;