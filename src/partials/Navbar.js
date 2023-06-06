import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex justify={"space-between"} >
      <Flex gap={"10"} align={"center"} >
        <Box>
          <NavLink to='/' className='font-bold text-[1.4rem]' >⌘ Glide</NavLink>
        </Box>
        <Flex fontSize={"sm"} align={"center"}>
          <NavLink to='feature' className='focus:bg-gray-50 focus:text-gray-500 px-4 py-2 rounded-lg' >Features</NavLink>
          <NavLink to='blog' className='focus:bg-gray-50 focus:text-gray-500 px-4 py-2 rounded-lg' >Blogs</NavLink>
          <NavLink to='docs' className='focus:bg-gray-50 focus:text-gray-500 px-4 py-2 rounded-lg' >Documentation</NavLink>
        </Flex>
      </Flex>
      <Box>
        <Button fontSize={"sm"} py={"2"} px={"7"} bgColor={"black"} color={"white"} fontWeight={"bold"} rounded={"full"} _hover={{ bgColor: "gray.100", color: "gray.500" }} >Join</Button>
      </Box>
    </Flex>
  )
}

export default Navbar
