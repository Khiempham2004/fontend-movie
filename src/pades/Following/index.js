import React from 'react';
import ReduxPropose from '../../redux/ReduxPropose/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReduxCooldown from '../../redux/ReduxCooldown/Index';
import ReduxMainSlider from '../../redux/ReduxMainslider';
import ReduxStone from '../../redux/ReduxStone/Index';
import Narbar from '../../Components/Navbar/Narbar';
import Footer from '../../Components/Footer/Footer';
import Home from '../Home';
function Following() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/movie/tien-si-da-phan-3-dr-stone-season-3' element={<>
                    <Narbar />
                    <ReduxStone />
                    <Footer />
                </>} />
                <Route index path='/movie/chu-thuat-hoi-chien-jujutsu-kaisen' element={<>
                    <Narbar />
                    <ReduxCooldown />
                    <Footer /></>} />
                <Route index path="/chuyen-tinh-notting-notting-hill" element={<>
                    <Narbar />
                    <ReduxPropose />
                    <Footer />
                </>} />
                <Route index path="/movie/nguoi-hobbit-dai-chien-5-canh-quan-the-hobbit" element={<>\
                    <Narbar />
                    <ReduxMainSlider />
                    <Footer />
                </>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Following;