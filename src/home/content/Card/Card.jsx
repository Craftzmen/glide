import React from 'react'

// Chakra Imports
import { Box, Text } from '@chakra-ui/react';

const Card = ( { img, label, description, isHiddenMobileImg } ) => {
    return (
      <div className='rounded-lg dark:border-zinc-700/50 bg-gradient-to-t from-zinc-100/50 to-white dark:from-zinc-800/20 dark:to-zinc-900'>
        <img src={img} alt='card' className={`mx-auto opacity-50 dark:opacity-80 ${isHiddenMobileImg ? 'hidden lg:block' : ''}`} />
        <Box className='px-8 pt-4 pb-6 dark:text-zinc-300'>
          <Text fontWeight='bold' fontSize='lg'>
            { label }
          </Text>
          <Text fontSize='sm' className='text-zinc-500 mt-2'>
            { description }
          </Text>
        </Box>
      </div>
    );
  };

export default Card
