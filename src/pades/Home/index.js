import React from 'react';
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Narbar'
import MovieCarousel from '../../Components/MovieCarousel/index';
import Avatar from '../../Components/Avartar/Avatar';
import Propose from '../../Components/Propose/Propose';
import MainSlider from '../../Components/MainSlider/MainSlider';
import Footer from '../../Components/Footer/Footer'
import Channel from '../../Components/Channel/Channel';
import Register from '../../Components/Register/Register';

function Home(props) {

    return (
        <div>
            <Navbar/>
            <Avatar />
            <Channel/>
            <Propose />
            <MainSlider />
            <MovieCarousel />
            <Footer />
        </div>
    );
}

export default Home;