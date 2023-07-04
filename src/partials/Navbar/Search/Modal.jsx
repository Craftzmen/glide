import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Modal as SearchModal, ModalOverlay, ModalContent, ModalBody, useDisclosure, Box } from '@chakra-ui/react';
import { BlogIcon, DocsIcon, FeatureIcon, PlaygroundIcon, ResourceIcon, SearchIcon, SnippetIcon, TemplateIcon } from '../../../svgs/svgs';

const Modal = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleKeyDown = (event) => {
    if (event.metaKey && event.key === 'k') {
      onOpen();
    }
  };

  const searchModalData = {
    learning: [
      { id: 1, dataPath: 'docs', dataLabel: 'Documentation', icon: DocsIcon },
      { id: 2, dataPath: 'snippets', dataLabel: 'Snippets', icon: SnippetIcon },
      { id: 3, dataPath: 'playground', dataLabel: 'Playground', icon: PlaygroundIcon },
    ],
    navigation: [
      { id: 1, dataPath: 'blog', dataLabel: 'Blogs', icon: BlogIcon },
      { id: 2, dataPath: 'feature', dataLabel: 'Features', icon: FeatureIcon },
      { id: 3, dataPath: 'materials', dataLabel: 'Materials', icon: ResourceIcon },
      { id: 4, dataPath: 'templates', dataLabel: 'Templates', icon: TemplateIcon },
    ],
    classes : 'flex gap-x-4 items-center hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md px-4 py-3 focus:outline-0 focus:bg-zinc-100 dark:focus:bg-zinc-700'
  }

  const searchModalCurrentPath =
    pathname === '/' ? 'Home' : pathname.charAt(1).toUpperCase() + pathname.slice(2);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const learningResults = searchModalData.learning.filter((item) => 
      item.dataLabel.toLowerCase().includes(query)
  );

    const navigationResults = searchModalData.navigation.filter((item) => 
      item.dataLabel.toLowerCase().includes(query)
  );

    setSearchResults({ learning: learningResults, navigation: navigationResults });
  };


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });


  return (
    <div className='z-50'>
      <button onClick={onOpen} className='dark:text-zinc-500 lg:hover:opacity-50 focus:outline-0 text-sm inline-flex items-center gap-x-2 translate-y-0.5 mx-0.5 rounded-md' >
      <SearchIcon/>⌘ K
      </button>
      <SearchModal isOpen={isOpen} onClose={onClose} mt={'20'} className='focus:outline-0 focus:ring-0'>
        <ModalOverlay bg={'rgba(255, 255, 255, 0.8)'} />
        <ModalContent className='p-0' mt={'40'} maxW={{ base: '100%', sm: '650px' }} rounded={'xl'} shadow={'0px 0px 80px lightgray'}>
          <ModalBody p={'4'} className='rounded-lg bg-white dark:bg-zinc-800'>
            <span className='px-2 py-1 rounded bg-zinc-100 text-zinc-500 text-xs dark:bg-zinc-700 dark:text-zinc-300'>
              {searchModalCurrentPath}
            </span>
            <Box className='mt-4'>
              <input
                type='text'
                placeholder='What are you up to?'
                className='focus:outline-0 placeholder:text-sm border-b px-3 py-2 w-full dark:bg-transparent dark:border-zinc-700 dark:text-zinc-300'
                value={searchQuery}
                onChange={handleSearch}
              />
              <div className='flex flex-col text-sm mt-4 text-zinc-400 max-h-72 overflow-y-scroll'>
                <label className='mt-1.5 mb-1 text-xs'>Learning</label>
                { searchResults.learning && searchResults.learning.length > 0 ? (
                  searchResults.learning.map((item, index) => (
                    <Link to={item.dataPath} key={index} onClick={onClose} className={searchModalData.classes} >
                      <item.icon />
                      <span> {item.dataLabel} </span>
                    </Link>
                  ))
                ) : (
                  <>
                    { searchModalData.learning.map((item, index) => (
                      <Link to={item.dataPath} key={index} onClick={onClose} className={searchModalData.classes} >
                        <item.icon />
                        <span> {item.dataLabel} </span>
                      </Link>
                    ))}
                  </>
                )}
                <label className='mt-4 mb-1 text-xs'>Navigation</label>
                { searchResults.navigation && searchResults.navigation.length > 0 ?  (
                  searchResults.navigation.map((item, index) => (
                    <Link to={item.dataPath} key={index} onClick={onClose} className={searchModalData.classes} >
                      <item.icon />
                      <span> {item.dataLabel} </span>
                    </Link>
                  ))
                ) : (
                  <>
                    { searchModalData.navigation.map((item, index) => (
                      <Link to={item.dataPath} key={index} onClick={onClose} className={searchModalData.classes} >
                        <item.icon />
                        <span> {item.dataLabel} </span>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </Box>
          </ModalBody>
        </ModalContent>
      </SearchModal>
    </div>
  );
};

export default Modal;
