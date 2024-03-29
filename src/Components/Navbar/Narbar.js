import React from 'react'
import './Navbar.css'
import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RemoveItem } from '../Logout/AuthContext.js'
import axios from 'axios';


const Narbar = (props) => {
    const contextSuggest = [
        {
            id: '1',
            label: "Trường Phong Độ",
            type: "school",
            link: "truongphongdo",
        },
        {
            id: '2',
            label: "Chị Đại Học Đường",
            type: "school",
            link: "chidaihocduong",
        },
        {
            id: '3',
            label: "V-League",
            type: "football",
            link: "vleague"
        },
        {
            id: '4',
            label: "Bài Hát Vui Nhộn Cho Bé",
            type: 'songsong',
            link: "baihatvuinhonchobe"
        },
        {
            id: "5",
            label: "Ốc Đảo Thanh Xuân",
            type: 'Oasis',
            link: "ocdaothanhxuan",
        },
    ]
    const [isSuggest, setSuggest] = useState(false)
    const [navSubSuggest, navSetSubSuggest] = useState(contextSuggest)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate("1");
    const open = Boolean(anchorEl);
    // const location = useLocation();

    const hanldLogout = async () => {
        setLogout(true);
        try {
            RemoveItem('token');
            navigate('/');
        } catch (error) {
            console.log("logout :>>", error);
        } finally {
            setLogout(false);
        }
    }

    // const handleLogout = async () => {
    //     let data = await logoutUser();
    //     if(data && +data.EC === 0){

    //     }
    // }

    // if (user && user.isAuthenticated === true || location.pathname === '/') {

    // }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navSuggest = () => {
        setSuggest(true)
    }
    const handleNav = (event) => {
        event.preventDefault()
        const value = event.target.value;
        console.log(value);
    }
    const handleSearchNav = (searchName) => {
        const filterNav = contextSuggest.filter(item => {
            return item.title.toLowerCase().indexOf(searchName.toLowerCase()) > -1 || item.id === searchName;
        })
        navSetSubSuggest(filterNav)
    };



    const search = async (event) => {
        event.preventDefault();
        try {
            const setSearch = await axios.post("http://localhost:3001/search", {
            })
            console.log("search ", setSearch.data);
        } catch (error) {
            console.log("error :>>", error);
        }
    }

    return (
        <div className='fixed-top'>
            <div className='Container'>
                <div className='boxShawdow'>
                    <div className='boxShawdow-logo'>
                        <Link to='/'>
                            <img
                                src={process.env.PUBLIC_URL + 'https://img-zlr2.tv360.vn/tv360-static/static/web/images/logo.png'}
                                alt='360'
                                href='https://tv360.vn/'
                            />
                        </Link>
                    </div>
                </div>
                <div className='heading'>
                    <div className='heading-menu'>
                        <Link to='/trangchu' >
                            <div title='Trang Chủ' className='Head-Tv360' >Trang Chủ</div>
                        </Link>
                        <br></br>
                        <Link to='/tv'>
                            <div title='Truyền hình' className='Head-videos'>Truyền hình</div>
                        </Link>
                        <Link to='/phim'>
                            <div title='Phim' className='Head-movies'>Phim</div>
                        </Link>
                        <br></br>
                        <br></br>
                        <Link to='/hbo-go'>
                            <div title='HBO GO' className='Head-hbo-go'>HBO GO</div>
                        </Link>
                    </div>
                    <br></br>
                </div>
                <div className='header'>
                    <div className='header-search'>
                        <Autocomplete
                            className='header-input'
                            disablePortal
                            options={contextSuggest}
                            sx={{ width: 330 }}
                            renderInput={(params) => <TextField {...params} type='text' autoComplete='off' placeholder='Tìm Kiếm' />}
                            onChange={(event, newValue) => {
                                if (newValue) {
                                    const { link } = newValue;
                                    navigate(`/${link}`, {
                                        relative: 'route'
                                    });
                                }
                            }}
                        />
                        <i className='bx bx-search-alt-2 bx-ms'></i>
                    </div>
                </div>
                <div className='header-icon'>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Nav className="me-auto">
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item >Change password</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={hanldLogout}>Logout </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default Narbar;