import React from 'react'

// Local Imports
import Image404 from '../../assets/images/404_error.png';

// Chakra Imports
import { Box, Flex, Text } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <section className="w-full h-screen bg-white dark:bg-zinc-900 flex justify-center items-center">
      <Box textAlign={"center"} className='flex flex-col lg:flex-row justify-center items-center gap-x-20 gap-y-10' >
        <img src={Image404} alt="404_error" className='max-w-sm aspect-square w-[80%]' />
        <Flex direction={"column"} textAlign={"left"} gap={"4"} className='dark:text-gray-300 mx-7' >
          <Text fontWeight={"bold"} className='sm:text-xl md:text-2xl' >The page you are looking for doesn&apos;t exist !</Text>
          <Text className='max-w-sm leading-7 text-sm text-zinc-500' >Disappointed ! Explore and Discover around, checkout our other cool tools and features that can help you. </Text>
        </Flex>
      </Box>
    </section>
  )
}

export default ErrorPage
