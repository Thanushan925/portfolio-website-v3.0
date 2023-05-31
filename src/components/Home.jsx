import React, { useState, useEffect } from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Text, Progress } from '@chakra-ui/react'

const Home = () => {
    // The following will be changing the sizes of the fonts based on the screen sizes
    const titleFontSize = useBreakpointValue({ base: '2xl', sm: '3xl', md: '5xl', lg: '7xl' });
    const subtitleFontSize = useBreakpointValue({ base: 'md', sm: 'lg', md: '2xl', lg: '4xl' });
    const textFontSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'xl', lg: '3xl' });

    // The following will carry out the 'Typing Effect' for the subtitle
    const [displayedText, setDisplayedText] = useState('');
    const subtitleText = 'Aspiring Software/Web Developer';

    useEffect(() => {
        let intervalID;

        const addNextChar = () => {
            setDisplayedText((previousText) => {
                const nextChar = subtitleText[previousText.length];
                return previousText + nextChar;
            });
        };

        if (displayedText.length < subtitleText.length) {
            intervalID = setInterval(addNextChar, 45);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [displayedText, subtitleText]);

    return (
        <Box position='relative' height='800px'>
            <AbsoluteCenter>
                <Text fontSize={ textFontSize } color='whiteAlpha.500'>Hi there, I'm</Text>
                <Text as='h1' fontSize={ titleFontSize } color='cyan.400' whiteSpace='nowrap'>Thanushan Satheeskumar</Text>
                <Progress size='xs' isIndeterminate colorScheme='cyan' bg='#212121'/>
                <Text className='spaceMonoFont' fontSize={ subtitleFontSize } color='white' whiteSpace='nowrap'>{ displayedText }</Text>
            </AbsoluteCenter>
        </Box>
    )
}

export default Home