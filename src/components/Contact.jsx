import React from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Text, FormControl, FormLabel, Input, Textarea, Center, Button } from '@chakra-ui/react'

const Contact = () => {
    // The following will be changing the sizes of the fonts based on the screen sizes
    const headingFontSize = useBreakpointValue({ base: 'lg', sm: 'xl', md: '3xl', lg: '5xl' });

    return (
        <Box position='relative' h='800px'>
            <AbsoluteCenter w="80%">
                <Center><Text as='h2' fontSize={ headingFontSize } color='cyan.400' whiteSpace='nowrap'>Contact</Text></Center>
                <Center>
                    <FormControl color='white' width='1000px' mb='100px' as='form' action="https://getform.io/f/fc741145-277e-440a-8d16-37318fb7a25a" method='POST'>
                        <FormLabel mt='3'>Name</FormLabel>
                        <Input type='text' variant='filled' bg='whiteAlpha.300' name='name' placeholder='Bruce Wayne' />
                        <FormLabel mt='3'>Email Address</FormLabel>
                        <Input type='email' variant='filled' bg='whiteAlpha.300' name='email' placeholder='notbatman@gmail.com' />
                        <FormLabel mt='3'>Message</FormLabel>
                        <Textarea type='email' variant='filled' bg='whiteAlpha.300' name='message' placeholder='Send me some more Kryptonite.' />
                        <Center><Button variant='solid' color='#212121' colorScheme='cyan' type='submit' mt='4'>Submit</Button></Center>
                    </FormControl>
                </Center>
            </AbsoluteCenter>
        </Box>
    )
}

export default Contact