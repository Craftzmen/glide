import React from 'react'
import { Link } from 'react-router-dom'

// Chakra Imports
import { Box, Flex ,Text } from '@chakra-ui/react'
import { ExternalArrowIcon } from '../../svgs/svgs'

const Header = () => {
  return (
    <Box className='w-full h-screen pt-16 lg:pt-28 bg-white dark:bg-zinc-900'>
      <Box className='border-l border-r border-dashed dark:border-zinc-700/50 px-10 pb-5 md:pt-5 mx-10 mt-10 ml-auto mr-auto flex justify-center items-center max-w-xs' >
        <Link to='404' className='flex justify-center items-center gap-x-2 bg-zinc-50 dark:bg-zinc-800/50 px-3.5 py-1.5 rounded-full mx-auto border border-zinc-100 dark:border-zinc-700/50 hover:opacity-50' >
          <div className='w-2 h-2 rounded-full bg-green-400' ></div>
          <Box>
            <Text fontSize={"xs"} className='text-zinc-500 dark:text-zinc-300' >Rails is now available</Text>
          </Box>
        <ExternalArrowIcon/>
        </Link>
      </Box>
    <Box>
      <Text className='mx-7 lg:mx-14 py-10 text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-extrabold xl:font-black border-t border-b border-dashed dark:border-zinc-700/50 text-center dark:text-zinc-300 xl:leading-[70px]' >The <span className='' >Landing</span> for every tech</Text>
      <Text className='leading-7 mt-5 lg:mt-10 mx-7 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-44 lg:leading-9 text-zinc-500 text-sm lg:text-lg text-center pb-5 md:pb-10 border-b border-dashed dark:border-zinc-700/50' >Glide is your all-in-one platform for seamless access to a vast array of technologies. With Glide, you can explore and discover any tech, you are passionate about, currently working on, or eager to learn.</Text>
    </Box>
      <Flex gap={"4"} className='text-sm md:text-base sm:border-l sm:border-r border-dashed dark:border-zinc-700/50 px-10 pt-10 pb-5 mx-10 ml-auto mr-auto flex justify-center items-center max-w-md' >
          <Link to='404' class='bg-zinc-100 px-10 py-2.5 rounded-lg font-semibold dark:bg-zinc-600/50 dark:text-zinc-300' >Join</Link>
          <Link to='docs' className='px-10 py-2.5 rounded-lg bg-black text-white font-semibold hover:opacity-50 dark:bg-zinc-800' >Explore Docs</Link>
      </Flex>
    </Box>
  )
}

export default Header
