import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bg="cyan.400" color="white" py="4" textAlign="center">
            <Text bg="cyan.400" color='#212121' fontSize="sm">
                &copy; {new Date().getFullYear()} - Thanushan Satheeskumar
            </Text>
        </Box>
    );
};

export default Footer;
