import React, { useState } from 'react'

// Chakra Imports
import { Flex, Box, IconButton, Collapse } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom'

// Local Imports
import { Logo, MenuIcon, CrossIcon } from '../svgs/svgs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  const mediaHideNavbar = () => {
    setIsOpen(false)
  }
  return (
    <Flex justify="space-between" position="sticky" top="0" w="full" backgroundColor="rgba(255, 255, 255, 0.5)" zIndex="100" backdropFilter="blur(10px)" className='px-7 md:px-20 py-2 md:py-3 border-b border-gray-200/70'>
      <Flex gap="10" align="center">
        <Box>
          <NavLink onClick={mediaHideNavbar} to="/" className="font-bold text-lg md:text-[1.4rem] flex gap-x-2 items-center">
            <Logo/>
            <p>Glide</p>
          </NavLink>
        </Box>

      { /* Desktop Nav ( Media Device ) */ }

        <Flex className='text-sm text-gray-500' align="center" display={{ base: 'none', md: 'flex' }}>
          <NavLink to="feature" className="focus:text-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:underline underline-2 underline-offset-[24px]">Features</NavLink>
          <NavLink to="blog" className="focus:text-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:underline underline-2 underline-offset-[24px]">Blogs</NavLink>
          <NavLink to="docs" className="focus:text-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:underline underline-2 underline-offset-[24px]">Documentation</NavLink>
        </Flex>
      </Flex>

      { /* Mobile Nav ( Media Devices ) */ }
      
      <Flex align="center">
        <Collapse in={isOpen} animateOpacity>
          <Flex className='text-sm font-light backdrop-blur-sm' direction="column" bg="white" h={"100vh"} p={"5"} mt="2" position="absolute" top={"10"} w={"full"} left={"0"} zIndex="10" >
            <NavLink to="404" onClick={mediaHideNavbar} className="px-7 py-3 rounded-md text-center font-bold bg-lime-400 text-lime-800 hover:opacity-50 focus:bg-gray-100 focus:text-gray-500 text-sm mb-3">Join</NavLink>
            <NavLink onClick={mediaHideNavbar} to="feature" className="focus:bg-gray-50 focus:text-gray-500 py-3 border-b border-gray-200">Features</NavLink>
            <NavLink onClick={mediaHideNavbar} to="blog" className="focus:bg-gray-50 focus:text-gray-500 py-3 border-b border-gray-200">Blogs</NavLink>
            <NavLink onClick={mediaHideNavbar} to="docs" className="focus:bg-gray-50 focus:text-gray-500 py-3">Documentation</NavLink>
          </Flex>
        </Collapse>
        <IconButton className='translate-x-4' variant={"unstyled"} icon={isOpen ? <CrossIcon /> : <MenuIcon />} onClick={toggleNavbar} display={{ base: 'block', md: 'none' }} />
        <NavLink to="404" className="hidden md:flex px-7 py-2 rounded-full font-bold bg-lime-400 text-lime-800 hover:opacity-50 focus:bg-gray-100 focus:text-gray-500 text-sm">Join</NavLink>
      </Flex>
    </Flex>
  )
}

export default Navbar
