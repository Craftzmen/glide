import React, { useState, useEffect } from 'react'
import { Link as NavLink } from 'react-router-dom'

// Chakra Imports
import { Text, Flex, Box, IconButton, Collapse, HStack } from '@chakra-ui/react'

// Local Imports
import { Logo, MenuIcon, CrossIcon, GithubIcon, ToneNetworkIcon, ToneTemplateIcon, ToneUpdateIcon} from '../../svgs/svgs'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import FeaturesMenu from './FeaturesMenu'

const Navbar = () => {
  const featureLinks = [
   {
    icon : ToneNetworkIcon,
    title: "One Network"
   },
   {
    icon : ToneTemplateIcon,
    title: "Templates"
   },
   {
    icon : ToneUpdateIcon,
    title: "Daily Updates"
   }
  ]
  // State Handling for Navigation Bar
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  const mediaHideNavbar = () => {
    setIsOpen(false)
  }
  // Theme Switcher
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true';
    setIsDarkMode(isDarkModeEnabled);
    if (isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !isDarkMode;
    setIsDarkMode(updatedMode);
    localStorage.setItem('isDarkModeEnabled', updatedMode);
    if (updatedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Flex justify="space-between" position="sticky" top="0" w="full" zIndex="100" className='bg-white/50 backdrop-blur-md dark:bg-gray-900 px-7 md:px-20 py-2 border-b border-gray-200/70 dark:border-gray-700'>
      <Flex gap="10" align="center">
        <Box>
          <NavLink onClick={mediaHideNavbar} to="/" className="font-bold dark:text-white text-lg md:text-[1.4rem] flex gap-x-2 items-center">
            <Logo/>
            <p>Glide</p>
          </NavLink>
        </Box>

      { /* Desktop Nav ( Media Device ) */ }

        <Flex className='text-sm text-gray-500' align="center" display={{ base: 'none', md: 'flex' }}>
          <FeaturesMenu/>
          <NavLink to="blog" className="focus:text-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:underline underline-2 underline-offset-[22px] dark:text-white dark:hover:bg-gray-800">Blogs</NavLink>
          <NavLink to="docs" className="focus:text-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:underline underline-2 underline-offset-[22px] dark:text-white dark:hover:bg-gray-800">Documentation</NavLink>
        </Flex>
      </Flex>

      { /* Mobile Nav ( Media Devices ) */ }
      
      <Flex align="center">
        <Collapse in={isOpen} animateOpacity>
          <Flex className='text-sm backdrop-blur-sm bg-white dark:bg-gray-900' direction="column" h={"100vh"} p={"5"} mt="2" position="absolute" top={"10"} w={"full"} left={"0"} zIndex="10" >
            <NavLink to="404" onClick={mediaHideNavbar} className="px-7 py-3 rounded-lg text-center font-bold bg-lime-400 text-lime-800 hover:opacity-50 focus:bg-gray-100 focus:text-gray-500 text-sm mb-3">Join</NavLink>
            <NavLink onClick={mediaHideNavbar} to="feature" className="focus:bg-gray-50 dark:text-white focus:text-gray-500 py-3 dark:hover:bg-gray-800">Features</NavLink>
              <Flex fontSize={"sm"} pb={"4"} direction={"column"} gap={"3.5"} className='border-b border-gray-200 dark:border-gray-700 dark:text-gray-300' >
                { featureLinks.map((item, index) => (
                  <NavLink key={index} to={'path-to-be-added'} onClick={mediaHideNavbar} >
                    <HStack spacing={"4"}>
                      <item.icon className="w-4 h-4" />
                      <Text> { item.title } </Text>
                    </HStack>
                  </NavLink>
                ))}
              </Flex>
            <NavLink onClick={mediaHideNavbar} to="blog" className="focus:bg-gray-50 dark:text-white focus:text-gray-500 py-3 border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">Blogs</NavLink>
            <NavLink onClick={mediaHideNavbar} to="docs" className="focus:bg-gray-50 dark:text-white focus:text-gray-500 py-3 dark:border-gray-700 dark:hover:bg-gray-800">Documentation</NavLink>
            <Flex align={"center"} gap={"1"} >
              <Box width={"1"} height={"7"} rounded={"full"} className='bg-black dark:bg-gray-300' ></Box>
              <a target='_blank' href="https://github.com/craftzmen" className='hover:opacity-50 w-full inline-flex gap-x-4 px-4 py-3 rounded-md bg-gray-100 font-semibold dark:bg-gray-800 dark:text-gray-300' >
                <GithubIcon/> Github
              </a>
            </Flex>
          </Flex>
        </Collapse>

        { /* Navigation right pannel elements */ }

          <Flex align={"center"} className='md:gap-4' >
            <Flex align={"center"} className='translate-x-4' >
              <IconButton color={"gray.500"} variant={"unstyled"} aria-label="Toggle dark mode" icon={isDarkMode ? <MoonIcon /> : <SunIcon />} onClick={toggleDarkMode} />
              <IconButton className='dark:text-gray-300 transition-all' variant={"unstyled"} icon={isOpen ? <CrossIcon /> : <MenuIcon />} onClick={toggleNavbar} display={{ base: 'block', md: 'none' }} />
            </Flex>
            <NavLink to="404" className="hidden md:flex px-7 py-2 rounded-full font-bold bg-lime-400 text-lime-800 hover:opacity-70 focus:bg-gray-100 focus:text-gray-500 text-sm">Join</NavLink>
            <a target='_blank' href="https://github.com/craftzmen" className='hover:opacity-50 hidden md:flex' >
              <GithubIcon/>
            </a>
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
