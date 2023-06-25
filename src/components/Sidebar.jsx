import React from 'react';
import { Box, Tooltip, Link, Center, Icon } from '@chakra-ui/react';
import { BsLinkedin, BsGithub, BsPersonLinesFill, BsMailbox } from "react-icons/bs";

const Sidebar = () => {
    return (
        <Box id='sidebar' pos='fixed' top='35%' zIndex='999' hideBelow='lg'>
            <Tooltip label="LinkedIn" bg='#0077B5' placement='right'>
                <Link href='https://www.linkedin.com/in/thanushan925' isExternal>
                    <Box p='3' bg='#0077B5'>
                        <Center><Icon as={ BsLinkedin } color='white' bg='#0077B5' w='10' h='10' /></Center>
                    </Box>
                </Link>
            </Tooltip>
            <Tooltip label="GitHub" bg='#171515' placement='right'>
                <Link href='https://github.com/Thanushan925' isExternal>
                    <Box p='3' bg='#171515'>
                        <Center><Icon as={ BsGithub } color='white' bg='#171515' w='10' h='10' /></Center>
                    </Box>
                </Link>
            </Tooltip>
            <Tooltip label="Resume" bg='#008080' placement='right'>
                <Link href='https://en.wikipedia.org/wiki/HTTP_404' isExternal>
                    <Box p='3' bg='#008080'>
                        <Center><Icon as={ BsPersonLinesFill } color='white' bg='#008080' w='10' h='10' /></Center>
                    </Box>
                </Link>
            </Tooltip>
            <Tooltip label="Email" bg='#4169E1' placement='right'>
                <Link href='mailto:thanushan.satheeskumar@ontariotechu.net' isExternal>
                    <Box p='3' bg='#4169E1'>
                        <Center><Icon as={ BsMailbox } color='white' bg='#4169E1' w='10' h='10' /></Center>
                    </Box>
                </Link>
            </Tooltip>
        </Box>
    );
};

export default Sidebar