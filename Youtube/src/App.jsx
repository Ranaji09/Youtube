import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  const [sidebar, setsidebar] = useState(true)
  return (
    <>
      <Navbar setsidebar={setsidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
      <Sidebar />
    </>
  )
}

export default App