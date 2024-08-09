import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/manu.png'
import logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/10.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({ setsidebar }) => {
     return (
          <>
               <nav className='flex-div'>
                    <div className='nav-left flex-div'>
                         <img className='menu-icon' onClick={() => setsidebar(prev => prev === false ? true : false)} src={menu_icon} alt="img" />
                         <Link to="/">
                              <img className='logo' src={logo} alt="logo" />
                         </Link>
                    </div>
                    <div className="nav-middle flex-div">
                         <div className="search-box flex-div">
                              <input type="text" placeholder='Search' />
                              <img src={search_icon} alt="search img" />
                         </div>
                    </div>
                    <div className="nav-right flex-div">
                         <img src={upload_icon} alt="upoad" />
                         <img src={more_icon} alt="mor" />
                         <img src={notification_icon} alt="notificon" />
                         <Link to={"https://youtube.com/@9stargaming.0?feature=shared"}>
                              <img src={profile_icon} alt="profe" className='user-icon' />
                         </Link>
                    </div>
               </nav>
          </>
     )
}

export default Navbar