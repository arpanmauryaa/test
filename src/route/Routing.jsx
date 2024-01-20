import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Post from '../components/post/Post'
import Home from '../components/protectroute/Home'
import Contact from '../components/protectroute/Contact'
import Protected from '../components/protectroute/Protected'
import About from '../components/protectroute/About'
import Info from '../components/protectroute/Info'
import info2 from '../components/protectroute/info2'





function Routing() {
    return (
        <>
            {/* Routs for Poster (first assignment) */}

            {/* <Routes>
                <Route path='/' element={<HomePage/>} />               
                <Route path="/component/post/:postId" element={<Post/>} />
            </Routes> */}




            {/* routs for protected */}
{/* 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Protected Component={Contact} />} />
                <Route path='/about' element={<Protected Component={About}/>} />
                <Route path='/info' element={<Protected Component={Info}/>} />
                <Route path='/info2' element={<Protected Component={info2}/>} />
            </Routes> */}
        </>
    )
}

export default Routing