import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'
import Post from './Pages/Post'
import Profile from './Pages/Profile'
const App = () => {
  //สมมุติว่าเราล็อกอินเเล้ว
  localStorage.setItem('currentUser','67a5a1a77420a2de4eddac47')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App