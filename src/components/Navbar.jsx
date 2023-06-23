import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Link, Icon } from '@chakra-ui/react';
import Logo from '../../public/Logo.png';

const Navbar = () => {
    // Used to activate 'Box Shadow' only when the user has scrolled, and is not at the very top
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setHasScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box as='nav' position='fixed' top='0' left='0' right='0' zIndex='999' bg='transparent' py='3' boxShadow={hasScrolled ? '0 0 10px rgba(0, 0, 0, 0.8)' : 'none'} backdropFilter='blur(8px)'>
            <Flex bg='transparent'align='center' justify='space-between' px='6'>
                <Link href='#home'>
                    <Image bg='transparent' src={Logo} alt='Logo' w='16' h='16' />
                </Link>

                <Flex as='ul' bg='transparent' listStyleType='none' ml='8' gap='6' >
                    <Link href='#about' color='cyan.400'>About Me</Link>
                    <Link href='#projects' color='cyan.400'>Projects</Link>
                    <Link href='#contact' color='cyan.400'>Contact</Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
