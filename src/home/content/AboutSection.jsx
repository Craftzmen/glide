import React from 'react'

// Local Imports
import ABOUT_IMG_1 from '../../assets/images/about_1.png'
import ABOUT_IMG_2 from '../../assets/images/about_2.png'
import ABOUT_IMG_3 from '../../assets/images/about_3.png'
import ABOUT_IMG_4 from '../../assets/images/about_4.png'
import ABOUT_IMG_5 from '../../assets/images/about_5.png'

import Card from './Card/Card'

// Chakra Imports
import { Box, Text } from '@chakra-ui/react'

const AboutSection = () => {
   const aboutCardsData = [
    {
        img : ABOUT_IMG_1,
        label : "Vast Content",
        description: "Explore multiple types of content for any tech including their documentation."
    },
    {
        img : ABOUT_IMG_2,
        label : "Extensible Materials",
        description: "Play around with lots of helping and attractive tech materials."
    },
    {
        img : ABOUT_IMG_3,
        label : "Documentation",
        description: "Discover docs for any tech you love , you can also download them as PDF, DOCS."
    },
    {
        img : ABOUT_IMG_4,
        label : "Playground",
        description: "Want to show what you got , Play in the new playground, All tech supported."
    },
    {
        img : ABOUT_IMG_5,
        label : "Templates",
        description: "Discover templates for any tech * free plus premium starter templates."
    },
   ]
    return (
        <Box className='w-full min-w-full min-h-screen pb-20 oveflow-x-hidden dark:bg-zinc-900 px-5 md:px-10 lg:px-20 xl:px-28' >
            <Box className='flex flex-col gap-y-2 sm:items-center gap-x-3 sm:flex-row sm:justify-center mt-10 lg:mt-0' >
                <Text className='text-3xl font-extrabold dark:text-zinc-300' >What is Glide ?</Text>
                <Text fontWeight={"medium"} className='text-zinc-500 text-sm sm:text-base tracking-wide' >All in one platform for tech !</Text>
            </Box>
            <div className='mx-auto mt-10 grid md:grid-cols-2 xl:grid-cols-3 w-full gap-4 gap-y-6 md:gap-y-4 xl:mt-10'>
            { aboutCardsData.map((card_item, index) => (
                <Card
                    key={ index }
                    img={ card_item.img }
                    label={ card_item.label }
                    description={ card_item.description }
                    isHiddenMobileImg={ ( index === 2 ) || ( index === 3 ) || ( index === 4 ) }
                />
                ))}
            </div>
        </Box>
    )
}

export default AboutSection
