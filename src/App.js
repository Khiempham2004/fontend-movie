import './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Narbar from './Components/Navbar/Narbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import ComponentMovies from './Components/Movie/Movie';
import TVComponent from './Components/TV/TVComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pades/Home/index'
import Following from './pades/Following';
import Collegesister from './Suggest/Collegesister/Index';
import SuggestHBO from './Suggest/SuggestHBO/Index';
import Notification from './Suggest/Notification/Index';
import StyleSchooll from './Suggest/StyleSchool/Index';
import SuggestSister from './Suggest/SuggestSister/Index';
import VleagueSuggest from './Suggest/VleagueSuggest';
import FunnySuggest from './Suggest/FunnySuggest/Index';
import SuggestOasis from './Suggest/SuggestOasis/Index';
import Register from './Components/Register/Register';
import Settings from './Suggest/Settings/Settings';
import Propose from './Components/Propose/Propose';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/truongphongdo' element={<>
          <Narbar />
          <StyleSchooll />
          <Footer />
        </>} />
        <Route path='/tv' element={<>
          <Narbar />
          <TVComponent />
          <Collegesister />
          <Footer />
        </>} />
        <Route path='/chidaihocduong' element={<>
          <Narbar />
          <SuggestSister />
          <Footer />
        </>} />
        <Route path='/vleague' element={<>
          <Narbar />
          <VleagueSuggest />
          <Footer />
        </>} />
        <Route path='/baihatvuinhonchobe' element={<>
          <Narbar />
          <FunnySuggest />
          <Footer />
        </>} />
        <Route path='/ocdaothanhxuan' element={<>
          <Narbar />
          <SuggestOasis />
          <Footer />
        </>} />
        <Route path='/recommend/movies' element={<>
          <Narbar/>
        <Propose/>
        <Footer/>
        </>} />
        <Route exact path='/collections/movies/xem-nhieu-nhat-tren-tv360' element={<>
          <Narbar />
          <ComponentMovies />
          <Footer />
        </>} />
        <Route exact path='/settings' element={<>
          <Narbar />
          <Settings />
          <Footer />
        </>} />
        {/* <Route exact path='/Login' element={<>
          
        <Register/></>} /> */}
        <Route path='/login' element={<>
          <Narbar />
          <Login />
          <Footer />
        </>} />
        <Route exact path="/phim" element={<>
          <Narbar />
          <ComponentMovies />
          <Footer />
        </>
        } />
        <Route path="/hbo-go" element={<>
          <Narbar />
          <SuggestHBO />
          <Footer />
        </>} />
        <Route path='/thongbao' element={<>
          <Narbar />
          <Notification />
          <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
