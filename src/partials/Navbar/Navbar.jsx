import React, { useState, useEffect } from 'react'
import { Link as NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Chakra Imports
import { Text, Flex, Box, IconButton, Collapse, HStack } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

// Local Imports
import { Logo, MenuIcon, CrossIcon, GithubIcon, ToneNetworkIcon, ToneTemplateIcon, ToneUpdateIcon} from '../../svgs/svgs'
import FeaturesMenu from './FeaturesMenu'
import Modal from './Search/Modal'

const Navbar = () => {
  const location = useLocation();

  const featureLinks = [
   { icon : ToneNetworkIcon, title: "One Network" },
   { icon : ToneTemplateIcon, title: "Templates" },
   { icon : ToneUpdateIcon, title: "Daily Updates" }
  ]
  const navLinks = [
    {
      label: 'Showcase', path: 'showcase',
      classes: `px-4 py-2 rounded-lg ${ location.pathname === '/showcase' ? 'text-black underline' : '' } underline-2 underline-offset-[20px] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800`
    },
    {
      label: 'Blogs', path: 'blog',
      classes: `px-4 py-2 rounded-lg ${ location.pathname === '/blog' ? 'text-black underline' : '' } underline-2 underline-offset-[20px] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800`
    },
    {
      label: 'Documentation', path: 'docs',
      classes: `px-4 py-2 rounded-lg ${ location.pathname === '/docs' ? 'text-black underline' : '' } underline-2 underline-offset-[20px] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800`
    },
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
    <Flex justify="space-between" w="full" zIndex="100" className='bg-white/50 fixed backdrop-blur-md dark:bg-zinc-900/50 px-7 md:px-20 py-1.5 border-b border-zinc-200/50 dark:border-zinc-700/50'>
      <Flex gap="6" align="center">
        <Box>
          <NavLink onClick={mediaHideNavbar} to="/" className="font-bold dark:text-white text-lg md:text-[1.4rem] flex gap-x-2 items-center">
            <Logo/>
          </NavLink>
        </Box>

        { /* Desktop Nav ( Media Device ) */ }

        <Flex className='text-prm-size text-zinc-500' align="center" display={{ base: 'none', lg: 'flex' }}>
          <FeaturesMenu/>
          { navLinks.map((navItem) => (
            <NavLink to={navItem.path} className={navItem.classes} > { navItem.label } </NavLink>
          ))}
        </Flex>
      </Flex>

      { /* Mobile Nav ( Media Devices ) */ }
      
      <Flex align="center">
       <Box className='lg:hidden' >
        <Collapse in={isOpen} animateOpacity>
            <Flex className='text-sm backdrop-blur-sm bg-white dark:bg-zinc-900' direction="column" h={"100vh"} p={"5"} mt="2" position="absolute" top={"10"} w={"full"} left={"0"} zIndex="10" >
              <NavLink to="404" onClick={mediaHideNavbar} className="px-7 py-3 rounded-lg text-center font-bold border border-gray-200 dark:border-zinc-700 dark:text-zinc-300 hover:opacity-50 focus:bg-zinc-100 focus:text-zinc-500 text-sm mb-3">Join</NavLink>
              <NavLink onClick={mediaHideNavbar} to="feature" className="focus:bg-zinc-50 dark:text-white focus:text-zinc-500 py-3 dark:hover:bg-zinc-800">Features</NavLink>
                <Flex fontSize={"sm"} pb={"2"} px={"4"} direction={"column"} gap={"3.5"} className='border-l-2 border-zinc-200 dark:border-zinc-700/50 dark:text-zinc-300' >
                  { featureLinks.map((item, index) => (
                    <NavLink key={index} to={'feature'} onClick={mediaHideNavbar} >
                      <HStack spacing={"4"}>
                        <Text> { item.title } </Text>
                      </HStack>
                    </NavLink>
                  ))}
                </Flex>
              <NavLink onClick={mediaHideNavbar} to="blog" className="focus:bg-zinc-50 dark:text-white focus:text-zinc-500 py-3.5 border-b border-zinc-200 dark:border-zinc-700/50 dark:hover:bg-zinc-800">Blogs</NavLink>
              <NavLink onClick={mediaHideNavbar} to="docs" className="focus:bg-zinc-50 dark:text-white focus:text-zinc-500 py-3.5 border-b dark:border-zinc-700/50 dark:hover:bg-zinc-800">Documentation</NavLink>
              <Flex align={"center"} gap={"1"} py={"5"} >
                <Box width={"1"} height={"7"} rounded={"full"} className='bg-black dark:bg-zinc-300' ></Box>
                <a target='_blank' href="https://github.com/craftzmen" rel='noreferrer' className='hover:opacity-50 w-full inline-flex gap-x-4 px-4 py-3 rounded-md bg-zinc-100 font-semibold dark:bg-zinc-800 dark:text-zinc-300' >
                  <GithubIcon/> Github
                </a>
              </Flex>
            </Flex>
          </Collapse>
       </Box>

        { /* Navigation right pannel elements */ }

          <Flex align={"center"} className='md:gap-4' >
            <Flex align={"center"} className='translate-x-4' >
              <Modal/>
              <IconButton mx={2} color={"gray.600"} variant={"unstyled"} aria-label="Toggle dark mode" icon={isDarkMode ? <MoonIcon /> : <SunIcon />} onClick={toggleDarkMode} />
              <IconButton className='dark:text-zinc-300 transition-all' variant={"unstyled"} icon={isOpen ? <CrossIcon /> : <MenuIcon />} onClick={toggleNavbar} display={{ base: 'block', lg: 'none' }} />
            </Flex>
            <NavLink to="404" className="hidden lg:flex px-7 py-2 rounded-full font-bold bg-black text-white dark:bg-zinc-600/50 hover:opacity-70 focus:bg-zinc-100 focus:text-zinc-500 text-sm">Join</NavLink>
            <a target='_blank' href="https://github.com/craftzmen" rel='noreferrer' className='hover:opacity-50 hidden lg:flex' >
              <GithubIcon/>
            </a>
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
