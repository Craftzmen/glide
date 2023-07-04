import React from 'react'
import { Link } from 'react-router-dom'

// ? Local Imports
import JoiningIllu from '../assets/images/joining_illu.png'
import ProfileImg from '../assets/images/profile_img.png'

// ? Chakra Importspo
import { Flex, Box, Text } from '@chakra-ui/react'

const Joining = ( { id = Math.random() , name = 'Craftzmen' } ) => {
    const surveyer = {
        id : id.toLocaleString(),
        name : name.toLocaleString()
    }
    console.log(surveyer)
  return (
    <section className='w-full md:flex md:justify-center md:items-center h-screen overflow-x-hidden overflow-y-scroll m-0 p-0 box-border dark:bg-zinc-900' >
        <Flex direction={{base : 'column', xl: 'row'}} gap={{base : '10', md: '14', lg: '20'}} mx={{base : '6', md : '10'}} mt={{base : '20'}}>
            <Flex direction={'column'} gap={{base : '5', md: '7'}} maxW={'md'} >
               <Flex direction={'column'} gap={'3'} >
                    <Text fontSize={{base : 'lg', xl : '3xl'}} className='dark:text-zinc-300' >
                        Unlock limitless possibilities by joining our vibrant network of <span className='text-zinc-500 font-extrabold' >Tech Stack</span>.
                    </Text>
                    <Text fontSize={{base : 'sm', xl : 'md'}} className='dark:text-zinc-500' >
                        Start using glide for asynchronous daily tech learning.
                    </Text>
               </Flex>
               <img src={JoiningIllu} alt='Joining' className=' w-28 h-28' />
               <Flex align={'center'} gap={'3'} >
                    <img src={ProfileImg} alt="profile" className='w-9 h-9 rounded-full' />
                    <Flex direction={'column'} fontSize={'xs'}>
                        <p className='text-zinc-500' >invited by</p>
                        <Text fontWeight={'semibold'} className='dark:text-zinc-300' > { surveyer.name } </Text>
                    </Flex>
               </Flex>
            </Flex>
            <form className='text-sm md:w-[32rem]' >
                <Flex direction={{base : 'column', lg : 'row'}} gap={'4'} mb={{lg: '4'}} >
                    <input type='text' id='name' placeholder='Name' className='w-full bg-zinc-100 rounded-lg py-3.5 px-5 focus:outline-0 dark:bg-zinc-800/50 dark:placeholder-zinc-500' required={ true } />
                    <input type='text' id='username' placeholder='Username' className='w-full bg-zinc-100 rounded-lg py-3.5 px-5 focus:outline-0 mb-4 lg:mb-0 dark:bg-zinc-800/50 dark:placeholder-zinc-500' />
                </Flex>
                <input type="text" id='email' placeholder='Email' className='w-full bg-zinc-100 rounded-lg py-3.5 px-5 focus:outline-0 mb-4 dark:bg-zinc-800/50 dark:placeholder-zinc-500' required={ true } />
                <input type="password" id='password' placeholder='Password' className='w-full bg-zinc-100 rounded-lg py-3.5 px-5 focus:outline-0 mb-7 dark:bg-zinc-800/50 dark:placeholder-zinc-500' required={ true } />
                <Box className='flex items-center text-xs gap-x-3' >
                    <input type="checkbox" id='checkbox' className="checkbox bg-gray-200 dark:bg-zinc-800/50 border-0 rounded-md checkbox-sm focus:outline-0" required={ true } />
                    <label htmlFor="checkbox" className='text-zinc-500 cursor-pointer' >Remember me</label>
                </Box>
                <Box className='flex items-center text-xs gap-x-3 mt-4' >
                    <input type="checkbox" id='checkbox' className="checkbox bg-gray-200 dark:bg-zinc-800/50 border-0 rounded-md checkbox-sm focus:outline-0" required={ true } />
                    <label htmlFor="checkbox" className='text-zinc-500 cursor-pointer' >I agree to the <span className='text-black font-medium dark:text-zinc-400' >Terms & Conditions</span> of use</label>
                </Box>
                <Box mt={{base : '8', lg: '10'}} display={'flex'} justifyContent={'end'} alignItems={'end'} >
                    <Link to="*" replace className="text-white bg-black py-3 rounded-full text-base font-semibold px-16 hover:opacity-70">
                        Join
                    </Link>
                </Box>
            </form>
        </Flex>
    </section>
  )
}

export default Joining
 