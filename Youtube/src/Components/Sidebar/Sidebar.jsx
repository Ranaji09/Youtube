import React from 'react'
import './Sidebar.css'

import home from '../../assets/menu.svg'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/mobile_icon.png'
import sports from '../../assets/sports.png'
import intertenment from '../../assets/intertenment.png'
import teck from '../../assets/texk.jpg'
import music from '../../assets/music.png'
import blogs from '../../assets/blog.png'
import news from '../../assets/News.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/Tom.png'
import megan from '../../assets/megon.jpg'
import cameron from '../../assets/camera.png'

const Sidebar = ({ sidebar, category, setcategory }) => {
     return (
          <>
               <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
                    <div className="sortcut-links">
                         <div className={`side-links${category === 0 ? "active" : ""}`} onClick={() => setcategory(0)}>
                              <img src={home} alt="Home" /> <p>Home</p>
                         </div>
                         <div className={`side-links${category === 20 ? "active" : ""}`} onClick={() => setcategory(20)}>
                              <img src={game_icon} alt="Home" /> <p>Gaming</p>
                         </div>
                         <div className={`side-links${category === 1 ? "active" : ""}`} onClick={() => setcategory(2)}>
                              <img src={automobiles} alt="Home" /> <p>Automobile</p>
                         </div>
                         <div className={`side-links${category === 17 ? "active" : ""}`} onClick={() => setcategory(17)}>
                              <img src={sports} alt="Home" /> <p>Sports</p>
                         </div>
                         <div className={`side-links${category === 24 ? "active" : ""}`} onClick={() => setcategory(24)}>
                              <img src={intertenment} alt="Home" /> <p>Intertenment</p>
                         </div>
                         <div className={`side-links${category === 28 ? "active" : ""}`} onClick={() => setcategory(28)}>
                              <img src={teck} alt="Home" /> <p>Tecknology</p>
                         </div>
                         <div className={`side-links${category === 10 ? "active" : ""}`} onClick={() => setcategory(10)}>
                              <img src={music} alt="Home" /> <p>Music</p>
                         </div>
                         <div className={`side-links${category === 22 ? "active" : ""}`} onClick={() => setcategory(22)}>
                              <img src={blogs} alt="Home" /> <p>Blogs</p>
                         </div>
                         <div className={`side-links${category === 25 ? "active" : ""}`} onClick={() => {
                              setcategory(25)
                         }}>
                              <img src={news} alt="Home" /> <p>News</p>
                         </div>

                    </div>
                    <hr />
                    <div className="subscribed-list">
                         <h3>Subscribed</h3>
                         <div className="side-links">
                              <img src={jack} alt="" /> <p>Rana ji</p>
                         </div>
                         <div className="side-links">
                              <img src={simon} alt="" /><p>King</p>
                         </div>
                         <div className="side-links">
                              <img src={tom} alt="" /><p>Bgmi</p>
                         </div>
                         <div className="side-links">
                              <img src={megan} alt="" /> <p>Amit</p>
                         </div>
                         <div className="side-links">
                              <img src={cameron} alt="" /><p>King of Landon</p>
                         </div>
                    </div>
               </div >
          </>
     )
}

export default Sidebar