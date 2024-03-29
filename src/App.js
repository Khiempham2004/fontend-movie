import './logo.svg';
import './App.css';
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
import ReduxMainSlider from './redux/ReduxMainslider';
import ReduxPropose from './redux/ReduxPropose/Index';
import ReduxCooldown from './redux/ReduxCooldown/Index';
import ReduxStone from './redux/ReduxStone/Index';
import Destruction from './redux/Destruction/Index';
import ReduxGangster from './redux/ReduxGangster/Index';
import ReduxControl from './redux/ReduxControl/Index';
import Packages from './Components/Packages/Index';
import Logout from './Components/Logout/Logout';
import Register from './Components/Register/Register';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Following /></>} />
        <Route path="/trangchu" element={<><Home /></>} />
        <Route path='/packages' element={
          <>
            <Narbar />
            <Packages />
            <Footer />
          </>}
        />

        <Route path='/logout' element={<>
        </>} />
        <Route exact path='/movie/tan-tieu-ngao-giang-ho' element={
          <>
            <Narbar />
            <ReduxControl />
            <Footer />
          </>}
        />
        <Route exact path='/movie/tan-tieu-ngao-giang-ho' element={<>
          <Narbar />
          <ReduxGangster />
          <Footer />
        </>} />
        <Route exact path='/movie/thanh-guom-diet-quy-ky-vien-tran' element={<>
          <Narbar />
          <Destruction />
          <Footer />
        </>} />
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
        <Route path='/recommend/movies' element={<>Component movies</>} />
        <Route exact path='/collections/movies/xem-nhieu-nhat-tren-tv360' element={<>
          <Narbar />
          <ComponentMovies />
          <Footer />
        </>} />
        <Route path='/login' element={<>
          <Login />
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
