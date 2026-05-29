import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex__div'>
        <div className="nav__left flex__div">
            <img className="menu__icon" onClick={()=>setSidebar(prev=>prev===false?true:false)}src={menu_icon} alt="" />
            <img className="logo" src={logo} alt="" />
        </div>

        <div className="nav__middle flex__div">
            <div className="search__box flex__div">
                <input src="text" type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="nav__right flex__div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} className="user__icon" alt="" />
        </div>
    </nav>
  )
}

export default Navbar