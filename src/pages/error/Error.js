import React from 'react'

// Chakra Imports
import { Box, Flex, Text } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <Box textAlign={"center"} mt={"48"} >
      <Flex direction={"column"} align={"center"} justify={"center"} gap={"4"} className='dark:text-gray-300' >
        <Text fontWeight={"bold"} className='text-3xl md:text-5xl' >404</Text>
        <Text>The page might not be available or is under construction</Text>
      </Flex>
    </Box>
  )
}

export default ErrorPage
