import React, { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';

// Chakra Imports
import { useColorMode } from '@chakra-ui/react';
import { Flex, Text, Menu, MenuButton, MenuList, HStack } from '@chakra-ui/react';

// Local Imports
import { DropIcon, ToneNetworkIcon, ToneTemplateIcon, ToneUpdateIcon, ToneDocsIcon } from '../../svgs/svgs';

const FeaturesMenu = () => {
  const dropdownData = [
    {
      icon: ToneNetworkIcon,
      title: "One Network",
      description: "Dozens of techs, one single network"
    },
    {
      icon: ToneTemplateIcon,
      title: "Templates",
      description: "Free + Premium templates available"
    },
    {
      icon: ToneUpdateIcon,
      title: "Daily Updates",
      description: "Stay updated with the latest tech"
    }
  ];
  const { colorMode } = useColorMode();

  // State Handling for Dropdown
  const [isPopped, setIsPopped] = useState(false);

  const handleToggle = () => {
    setIsPopped(!isPopped);
  };

  const handleNavLinkClick = () => {
    setIsPopped(false); // Close the dropdown when NavLink is clicked
  };

  return (
    <Menu isOpen={isPopped} onOpen={handleToggle} onClose={handleToggle}>
      <MenuButton className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800 inline-flex items-center gap-x-3">
        <HStack spacing={"3"}>
          <Text>Features</Text>
          <DropIcon />
        </HStack>
      </MenuButton>
      <MenuList pb={"none"} rounded={"xl"} shadow={"xl"} borderColor={"gray.100"} className={`dark:text-zinc-300 dark:bg-zinc-900 dark:border-zinc-700/50 ${colorMode === 'dark' ? 'dark' : ''}`}>
        <Flex direction={"column"}>
          { dropdownData.map((item, index) => (
              <NavLink key={index} to={'feature'} className='px-5 py-3 mx-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700/50' onClick={handleNavLinkClick}>
                <Flex gap={"4"} align={"center"}>
                  <item.icon/>
                  <Flex direction={"column"} fontSize={"xs"}>
                    <Text fontWeight={"bold"}> { item.title }</Text>
                    <Text className='max-w-[13rem]'> { item.description } </Text>
                  </Flex>
                </Flex>
              </NavLink>
          ))}
          <NavLink to='docs' onClick={handleNavLinkClick} className='rounded-b-lg bg-zinc-200/30 dark:bg-zinc-700/30 mt-2 hover:opacity-70' >
            <Flex gap={"4"} p={"5"} align={"center"} >
              <ToneDocsIcon/>
                <Flex direction={"column"} fontSize={"xs"} >
                  <Text fontWeight={"bold"}>Documentations</Text>
                  <Text className='max-w-[13rem]'>Explore docs of any tech you love.</Text>
                </Flex>
              </Flex>
          </NavLink>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default FeaturesMenu;
