import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';  
import { useNavigate } from "react-router-dom";

const Narbar = () => {
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
    const navigate = useNavigate("1")
    const open = Boolean(anchorEl);
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
                        <Link to='/' >
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
                    <div title='Thông báo'>
                        <Link to='/thongbao'><i className='bx bxs-bell bx-md'></i></Link>
                    </div>
                    <br></br>
                    <div className='header-package' title='mua gói'>
                        <Link title='Mua Gói' to='/packages'>
                            <button className='header-package-effect'>Mua Gói</button>
                        </Link>
                    </div>
                    <div className='header-userName'>
                        <ul>
                            <li title='Đăng Nhập'>
                                <Link to="/login"><i className='bx bxs-user bx-md'></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Narbar;