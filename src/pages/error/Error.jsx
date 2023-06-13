import React from 'react'

// Chakra Imports
import { Box, Flex, Text } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <section className="w-full h-screen bg-white dark:bg-zinc-900 flex justify-center items-center">
      <Box textAlign={"center"}>
        <Flex direction={"column"} align={"center"} justify={"center"} gap={"4"} className='dark:text-gray-300' >
          <Text fontWeight={"bold"} className='text-3xl md:text-5xl' >404</Text>
          <Text>The page might not be available or is under construction</Text>
        </Flex>
      </Box>
    </section>
  )
}

export default ErrorPage
