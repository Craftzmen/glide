import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Local Imports
import Features from '../pages/Features'
import Blogs from '../pages/Blogs'
import Documentation from '../docs/Documentation'
import ErrorPage from '../pages/error/Error'
import HomeContent from './HomeContent'
import Navbar from '../partials/Navbar/Navbar'

// Chakra Imports
import { Box } from '@chakra-ui/react'
import Joining from '../joining/Joining'

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className='w-full h-screen overflow-x-hidden overflow-y-scroll m-0 p-0 box-border dark:bg-zinc-900' >
      <Box className='sticky top-0 z-50' >
        <Navbar/>
      </Box>
      <div>
        <Routes>
            <Route path='/' element={<HomeContent/>} />
            <Route path='feature' element={<Features/>} />
            <Route path='blog' element={<Blogs/>} />
            <Route path='docs' element={<Documentation/>} /> 
            <Route path='*' element={<ErrorPage navigate={navigate} />} />
            <Route path='join' element={<Joining/>} />
        </Routes>
      </div>
    </section>
  )
}

export default Home
