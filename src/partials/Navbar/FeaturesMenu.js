import React, { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';

// Chakra Imports
import { useColorMode } from '@chakra-ui/react';
import { Flex, Text, Menu, MenuButton, MenuList, HStack } from '@chakra-ui/react';

// Local Imports
import { DropIcon, ToneNetworkIcon, ToneTemplateIcon, ToneUpdateIcon, ToneBotIcon } from '../../svgs/svgs';

const FeaturesMenu = () => {
  const dropdownData = [
    {
      icon: ToneNetworkIcon,
      title: "One Network",
      description: "Place where all tech lands together and merge."
    },
    {
      icon: ToneTemplateIcon,
      title: "Templates",
      description: "Free plus Premium templates for all the tech we got."
    },
    {
      icon: ToneUpdateIcon,
      title: "Daily Updates",
      description: "Stay updated with the latest version and docs of any tech."
    },
    {
      icon: ToneBotIcon,
      title: "Chat Bot",
      description: "Bot that helps you with your learning and work"
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
      <MenuButton className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 inline-flex items-center gap-x-3">
        <HStack spacing={"3"}>
          <Text>Features</Text>
          <DropIcon />
        </HStack>
      </MenuButton>
      <MenuList rounded={"xl"} shadow={"xl"} borderColor={"gray.100"} py={"3"} px={"4"} className={`dark:text-gray-300 dark:bg-gray-800 dark:border-gray-800 ${colorMode === 'dark' ? 'dark' : ''}`}>
        <Flex direction={"column"}>
          { dropdownData.map((item, index) => (
            <NavLink key={index} to={'path-to-be-added'} className='p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700' onClick={handleNavLinkClick}>
              <Flex gap={"4"}>
                <item.icon />
                <Flex direction={"column"} fontSize={"xs"}>
                  <Text fontWeight={"bold"}>{item.title}</Text>
                  <Text className='max-w-[13rem]'>{item.description}</Text>
                </Flex>
              </Flex>
            </NavLink>
          ))}
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default FeaturesMenu;
