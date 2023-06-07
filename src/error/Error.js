import React from 'react'

// Chakra Imports
import { Box, Text } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <Box textAlign={"center"} mt={"60"} >
      <Text fontSize={"sm"} ><span className='font-bold text-3xl' >404</span> | Page might not be available or is under construction</Text>
    </Box>
  )
}

export default ErrorPage
