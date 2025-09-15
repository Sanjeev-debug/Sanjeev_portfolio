import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../layout/Layout'
import Contact from '../pages/Contact'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import NotFound from '../pages/NotFound'
import Education from '../pages/Education'

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/aboutMe' element={<About/>} />
        <Route path='/contactMe' element={<Contact/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers