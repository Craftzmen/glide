import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Features from '../pages/Features'
import Blogs from '../pages/Blogs'
import Documentation from '../docs/Documentation'
import Navbar from '../partials/Navbar'

// Chakra Imports
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Box w={"full"} px={"20"} py={"4"} >
        <Navbar/>
      </Box>
      <div>
        <Routes>
            <Route path='feature' element={<Features/>} />
            <Route path='blog' element={<Blogs/>} />
            <Route path='docs' element={<Documentation/>} /> 
        </Routes>
      </div>
    </div>
  )
}

export default Home
