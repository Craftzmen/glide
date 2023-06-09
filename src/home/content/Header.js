import React from 'react'
import { Link } from 'react-router-dom'

// Chakra Imports
import { Box, Flex ,Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Header = () => {
  return (
    <Box className='md:mt-16 lg:mt-20'>
      <Box className='border-l border-r border-dashed dark:border-gray-700 px-10 pb-5 md:pt-5 mx-10 mt-10 ml-auto mr-auto flex justify-center items-center max-w-xs' >
        <Link to='404' className='flex justify-center items-center gap-x-3 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-full mx-auto border border-gray-100 dark:border-gray-700 hover:opacity-50' >
          <div className='w-2.5 h-2.5 rounded-full bg-green-400'></div>
          <Box>
            <Text fontSize={"xs"} className='text-gray-500 dark:text-gray-300' >Stripe is now available</Text>
          </Box>
        <ExternalLinkIcon width={"3.5"} height={"3.5"} color={"gray.400"} />
        </Link>
      </Box>
    <Box>
      <Text className='mx-7 lg:mx-20 py-10 text-4xl xl:text-6xl font-extrabold border-t border-b border-dashed dark:border-gray-700 text-center dark:text-gray-300' >The <span className='text-lime-400' >Landing</span> for all documentations</Text>
      <Text className='leading-7 mt-5 lg:mt-10 mx-7 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-44 lg:leading-9 text-gray-500 text-sm lg:text-lg text-center pb-5 md:pb-10 border-b border-dashed dark:border-gray-700' >Glide is your all-in-one platform for seamless access to a vast array of technologies. With Glide, you can explore and discover comprehensive<Link to='docs' className='text-lime-500 underline underline-offset-4 font-semibold' > docs </Link>for any tech you are passionate about, currently working on, or eager to learn.</Text>
    </Box>
      <Flex justify={"center"} align={"center"} gap={"4"} className='text-sm md:text-base sm:border-l sm:border-r border-dashed dark:border-gray-700 px-10 pt-10 pb-5 mx-10 ml-auto mr-auto flex justify-center items-center max-w-md' >
          <Link to='404' class='border border-gray-300/50 bg-gray-100 px-10 py-2 rounded-lg font-semibold dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700' >Explore</Link>
          <Link to='docs' className='px-16 py-2 rounded-lg bg-lime-400 text-lime-800 font-semibold border border-lime-400 hover:opacity-50' >Docs</Link>
      </Flex>
  </Box>
  )
}

export default Header
