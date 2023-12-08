import React, { Component } from 'react'
import './Avatar.css';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

function Avatar() {
    return (
        <div>
            <div className='Avar'>
                <MDBCarousel showControls interval={3000}>
                    <MDBCarouselItem itemId={1} >
                        <img 
                            src='https://img-zlr1.tv360.vn/image1/2023/10/31/10/1698722052160/2047760c1e1d_640_360.jpg'
                            className='mySlides'
                            alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <img
                            src='https://img-zlr1.tv360.vn/image1/2023/09/25/10/1695611344790/d82a846fe95c_640_360.jpg'
                            className='mySlides'
                            alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <img
                            src='https://img-zlr1.tv360.vn/image1/2023/09/11/15/1694420202994/51f609b2f1cb_640_360.jpg'
                            className='mySlides'
                            alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={4}>
                        <img
                            src='https://img-zlr1.tv360.vn/image1/2023/11/08/13/1699425977408/043656049ba3_640_360.jpg'
                            alt='...'
                            className='mySlides'
                        />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={5}>
                        <img
                            src='https://img-zlr1.tv360.vn/image1/2023/11/07/14/1699341064268/01729eb6e66f_640_360.jpg'
                            alt='...'
                            className='mySlides'
                        />
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </div>
    )
}
export default Avatar;