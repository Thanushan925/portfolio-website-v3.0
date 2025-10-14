import React from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Text, Grid, GridItem, Center, Show } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { SiCplusplus, SiPython, SiJavascript, SiDart, SiGo, SiHtml5, SiCss3, SiFlutter, SiReact, SiNodedotjs, SiVuedotjs, SiBootstrap, SiTailwindcss, SiPostgresql, SiMysql, SiPandas, SiNumpy, SiAlwaysdata, SiVisualstudiocode, SiGit, SiGithub, SiGooglecloud, SiExpertsexchange, SiServerless, SiAndroid } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

const About = () => {
    // Used to change the sizes of the fonts based on the screen sizes
    const headingFontSize = useBreakpointValue({ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' });
    const secondHeadingFontSize = useBreakpointValue({ base: 'xl', sm: '2xl', md: '4xl', lg: '5xl' });
    const paragraphFontSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'lg', lg: '2xl' });
    const listFontSize = useBreakpointValue({ base: 'sm', sm: 'md'});

    return (
        <Box id='about' position='relative' h='1000px'>
            <AbsoluteCenter w="80%">
                <Text as='h2' fontSize={ headingFontSize } color='cyan.400' whiteSpace='nowrap'>About Me</Text>
                <Text fontSize={ paragraphFontSize } color='white' textAlign='justify'>
                    I’m a Computer Science student at Ontario Tech University passionate about using software to simplify life through clean,
                    creative, and practical solutions. From building intuitive web interfaces to developing a 3D-avatar AI chatbot that boosts
                    productivity and mental well-being, I love combining design, logic, and innovation to make a real impact.
                </Text>
                <br></br>
                <br></br>
                <Text as='h3' fontSize={ secondHeadingFontSize } color='cyan.400'>Experienced in:</Text>
                {/* When the screen is large enough, it will display Icons*/}
                <Show above='lg'>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white' textAlign="center">Programming Languages</Text>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ FaJava } color='#ec2025' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>Java</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiCplusplus } color='#00599d' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>C++</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiPython } color='#ffd946' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>Python</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiJavascript } color='#f7e018' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>JavaScript</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiDart } color='#2cb7f6' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>Dart</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiGo } color='#00aed9' w='16' h='16' /></Center>
                                <Center><Text fontSize={ listFontSize } color='white'>Go</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text color='white' textAlign="center">Web & Mobile Dev</Text>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiHtml5 } color='#e4522c' w='16' h='16' /></Center>
                                <Center><Text color='white'>HTML</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiCss3 } color='#264de4' w='16' h='16' /></Center>
                                <Center><Text color='white'>CSS</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiFlutter } color='#44d2fd' w='16' h='16' /></Center>
                                <Center><Text color='white'>Flutter</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiReact } color='#61dbfb' w='16' h='16' /></Center>
                                <Center><Text color='white'>React.js</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiNodedotjs } color='#83cd29' w='16' h='16' /></Center>
                                <Center><Text color='white'>Node.js</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiVuedotjs } color='#3fb984' w='16' h='16' /></Center>
                                <Center><Text color='white'>Vue.js</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiBootstrap } color='#810af9' w='16' h='16' /></Center>
                                <Center><Text color='white'>Bootstrap</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiTailwindcss } color='#35bef8' w='16' h='16' /></Center>
                                <Center><Text color='white'>TailwindCSS</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text color='white' textAlign="center">Databases & Visualization</Text>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiPostgresql } color='#306792' w='16' h='16' /></Center>
                                <Center><Text color='white'>PostgreSQL</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiMysql } color='#ffa518' w='16' h='16' /></Center>
                                <Center><Text color='white'>MySQL</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ DiMsqlServer } color='#a91d22' w='16' h='16' /></Center>
                                <Center><Text color='white'>SQL Server</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiPandas } color='#130754' w='16' h='16' /></Center>
                                <Center><Text color='white'>Pandas</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiNumpy } color='#4d77cf' w='16' h='16' /></Center>
                                <Center><Text color='white'>NumPy</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiAlwaysdata } color='#11557c' w='16' h='16' /></Center>
                                <Center><Text color='white'>Matplotlib</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                    <Grid templateColumns='repeat(11, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text color='white' textAlign="center">Developer Tools</Text>
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
                                <Center><Icon as={ SiGit } color='#f05030' w='16' h='16' /></Center>
                                <Center><Text color='white'>Git</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiGithub } color='#ffffff' w='16' h='16' /></Center>
                                <Center><Text color='white'>GitHub</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiGooglecloud } color='#0dbac8' w='16' h='16' /></Center>
                                <Center><Text color='white'>SharePoint</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiExpertsexchange } color='#ff7008' w='16' h='16' /></Center>
                                <Center><Text color='white'>Nintex</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiServerless } color='#ffb900' w='16' h='16' /></Center>
                                <Center><Text color='white'>SSMS</Text></Center>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem>
                                <Center><Icon as={ SiAndroid } color='#92c657' w='16' h='16' /></Center>
                                <Center><Text color='white'>Android Studio</Text></Center>
                            </GridItem>
                        </Center>
                    </Grid>
                </Show>
                {/* When the screen is smaller than required, it will display only text*/}
                <Show below='lg'>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Programming Languages</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>Java, C++, Python, JavaScript, Dart, Go, SQL</Text>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Web & Mobile Development</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>HTML/CSS, Flutter, React.js, Node.js, Vue.js, Bootstrap, Tailwind CSS</Text>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Databases & Visualization</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>PostgreSQL, MySQL, SQL Server, Pandas, NumPy, Matplotlib</Text>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(2, 1fr)' gap='3' mt='2'>
                        <Center>
                            <GridItem>
                                <Text fontSize={ listFontSize } color='white'>Developer Tools</Text>
                            </GridItem>
                        </Center>
                        <GridItem>
                            <Text fontSize={ listFontSize } color='white'>VS Code, Git, GitHub, SharePoint, Nintex, SQL Server Management Studio, Android Studio</Text>
                        </GridItem>
                    </Grid>
                </Show>
            </AbsoluteCenter>
        </Box>
    )
}

export default About