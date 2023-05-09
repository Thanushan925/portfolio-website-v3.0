import React from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Text, Grid, GridItem, Center, Show } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiChakraui, SiTailwindcss, SiBulma, SiPug, SiVuedotjs, SiCplusplus, SiCoursera, SiPython, SiGo, SiVisualstudiocode, SiGithub, SiGit, SiNetlify, SiIntellijidea, SiMicrosoftoffice } from "react-icons/si";
import { FaJava } from "react-icons/fa"

const About = () => {
    // The following will be changing the sizes of the fonts based on the screen sizes
    const headingFontSize = useBreakpointValue({ base: 'lg', sm: 'xl', md: '3xl', lg: '5xl' });
    const secondHeadingFontSize = useBreakpointValue({ base: 'md', sm: 'lg', md: '2xl', lg: '4xl' });
    const paragraphFontSize = useBreakpointValue({ base: 'xs', sm: 'sm', md: 'lg', lg: '2xl' });
    const listFontSize = useBreakpointValue({ base: 'sm', sm: 'md'});

    return (
        <Box position='relative' h='1000px'>
            <AbsoluteCenter w="80%">
                <Text as='h2' fontSize={ headingFontSize } color='cyan.400' whiteSpace='nowrap'>About Me</Text>
                <Text fontSize={ paragraphFontSize } color='white'>
                    I am an undergraduate Computer Science student at Ontario Tech University. I have a passion for creating websites,
                    whether it's for fun and games, simplifying and automating tasks, or promoting a company's products and services.
                    Making websites allow me to combine my creativity and problem-solving skills to create unique and innovative solutions.
                </Text>
                <br></br>
                <br></br>
                <Text as='h3' fontSize={ secondHeadingFontSize } color='cyan.400'>Experienced in:</Text>
                {/* When the screen is large enough, it will display Icons*/}
                <Show above='lg'>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Web Dev</Text>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiHtml5 } color='#F06529' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>HTML</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiCss3 } color='#2965F1' w='16' h='16' /></Center>
                                <Center><Text color='white'>CSS</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiJavascript } color='#F0DB4F' w='16' h='16' /></Center>
                                <Center><Text color='white'>JavaScript</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiReact } color='#88DDED' w='16' h='16' /></Center>
                                <Center><Text color='white'>ReactJS</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiBootstrap } color='#563D7C' w='16' h='16' /></Center>
                                <Center><Text color='white'>Boostrap</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiChakraui } color='#4FD1C5' w='16' h='16' /></Center>
                                <Center><Text color='white'>ChakraUI</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiTailwindcss } color='#38BDF8' w='16' h='16' /></Center>
                                <Center><Text color='white'>TailwindCSS</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiBulma } color='#00D1B2' w='16' h='16' /></Center>
                                <Center><Text color='white'>Bulma</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiVuedotjs } color='#42B883' w='16' h='16' /></Center>
                                <Center><Text color='white'>VueJS</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiPug } color='#A86454' w='16' h='16' /></Center>
                                <Center><Text color='white'>Pug</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text color='white'>Software Dev</Text>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiCplusplus } color='#1463A3' w='16' h='16' /></Center>
                                <Center><Text color='white'>C++</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ FaJava } color='#F89820' w='16' h='16' /></Center>
                                <Center><Text color='white'>Java</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiPython } color='#FFDE57' w='16' h='16' /></Center>
                                <Center><Text color='white'>Python</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiCoursera } color='#3646A4' w='16' h='16' /></Center>
                                <Center><Text color='white'>C</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiGo } color='#007D9C' w='16' h='16' /></Center>
                                <Center><Text color='white'>GO</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text color='white'>Other Tools</Text>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiVisualstudiocode } color='#0078D7' w='16' h='16' /></Center>
                                <Center><Text color='white'>VS Code</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiGithub } color='#F5F5F5' w='16' h='16' /></Center>
                                <Center><Text color='white'>GitHub</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiGit } color='#F34F29' w='16' h='16' /></Center>
                                <Center><Text color='white'>Git</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiNetlify } color='#32E6E2' w='16' h='16' /></Center>
                                <Center><Text color='white'>Netlify</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiIntellijidea } color='#FE2D5D' w='16' h='16' /></Center>
                                <Center><Text color='white'>IntelliJ IDEA</Text></Center>
                            </GridItem>
                        </Center>

                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiMicrosoftoffice } color='#F25022' w='16' h='16' /></Center>
                                <Center><Text color='white'>MS Office</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                </Show>
                {/* When the screen is smaller than required, it will display only text*/}
                <Show below='lg'>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Web Dev</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>HTML, CSS, JavaScript, ReactJS, Bootstrap, ChakraUI, TailwindCSS, Bulma, VueJS, Pug</Text>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Software Dev</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>C++, Java, Python, C, GO</Text>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Other Tools</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>VS Code, GitHub, Git, Netlify, IntelliJ IDEA, MS Office</Text>
                        </GridItem>
                    </Grid>
                </Show>
            </AbsoluteCenter>
        </Box>
    )
}

export default About