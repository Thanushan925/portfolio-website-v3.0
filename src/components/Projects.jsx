import React from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Center, Text, Flex, Stack, Button, Link, Card, CardBody, CardFooter } from '@chakra-ui/react'

const Projects = () => {
    // The following will be changing the sizes of the fonts based on the screen sizes
    const headingFontSize = useBreakpointValue({ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' });
    const secondHeadingFontSize = useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' });
    const paragraphFontSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'lg', lg: '2xl' });

    const projectData = [
        {
            title: "AvatarConnect",
            description: "An immersive AI mental health companion featuring a 3D avatar with real-time lip-sync. Built with FastAPI and LLaMA 3, it handles complex, multi-turn conversations with low-latency speech synthesis.",
            demo: "https://your-demo-link.com",
            code: "https://github.com/Thanushan925",
        },
        {
            title: "Enterprise Hub",
            description: "A centralized landing platform for internal corporate applications. Features a modular UI integrated with SQL Server, streamlining navigation and access for enterprise-scale workflows.",
            demo: "https://your-demo-link.com",
            code: "https://github.com/Thanushan925",
        },
        {
            title: "Accept the Cookies",
            description: "A full-stack MEVN e-commerce ecosystem. Implements secure role-based access, real-time admin-to-customer messaging, and a dynamic state-driven interface for a seamless shopping experience.",
            demo: "https://your-demo-link.com",
            code: "https://github.com/Thanushan925/accept-the-cookies",
        }
    ];

    return (
        <Box id='projects' position='relative' h='1100px'>
            <AbsoluteCenter w="80%">
                <Text as='h2' fontSize={ headingFontSize } color='cyan.400' whiteSpace='nowrap'>Projects</Text>
                <Flex direction={{ base: 'column', xl: 'row' }} spacing={4}>
                    <Card overflow='hidden' variant='outline' borderColor='cyan.400' bg='#212121' m='1'>
                        <Stack>
                            <CardBody>
                                <Text fontSize={ secondHeadingFontSize } color='cyan.400'>3D Avatar Mental Health Chatbot for Students</Text>
                                <Text fontSize={ paragraphFontSize } color='white' py='2'>
                                    An immersive AI mental health companion featuring a 3D
                                    avatar with real-time lip-sync. Built with FastAPI and
                                    LLaMA 3, it handles complex, multi-turn conversations
                                    with low-latency speech synthesis. It also supports
                                    multilingualism (Persian + Yoruba).
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='https://avatarconnect.me/' isExternal><Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button></Link>
                                <Link href='https://github.com/Thanushan925/krypto-tracker' isExternal><Button variant='outline' colorScheme='cyan' mx='1'>Code</Button></Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card overflow='hidden' variant='outline' borderColor='cyan.400' bg='#212121' m='1'>
                        <Stack>
                            <CardBody>
                                <Text fontSize={ secondHeadingFontSize } color='cyan.400'>AI-Powered Workout and Macro Tracker</Text>
                                <Text fontSize={ paragraphFontSize } color='white' py='2'>
                                    A full-stack health ecosystem featuring local AI model
                                    integration via Ollama. It generates personalized workouts
                                    and nutritional recipes using LLaMA-based models. Fully
                                    containerized for seamless deployment.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='https://ltfitnesstracker.online/' isExternal><Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button></Link>
                                <Link href='https://github.com/Thanushan925/LT-Fitness-Application' isExternal><Button variant='outline' colorScheme='cyan' mx='1'>Code</Button></Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card overflow='hidden' variant='outline' borderColor='cyan.400' bg='#212121' m='1'>
                        <Stack>
                            <CardBody>
                                <Text fontSize={ secondHeadingFontSize } color='cyan.400'>Cookie Company Online Store</Text>
                                <Text fontSize={ paragraphFontSize } color='white' py='2'>
                                    A full-stack MEVN e-commerce ecosystem. Implements
                                    secure role-based access, real-time admin-to-customer
                                    messaging, and a dynamic state-driven interface for a
                                    seamless shopping experience.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='https://github.com/Thanushan925/Accept-the-Cookies' isExternal><Button variant='outline' colorScheme='cyan' mx='1'>Code</Button></Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Flex>
                <br></br>
                <Center><Link href='https://github.com/Thanushan925' isExternal><Button variant='solid' color='#212121' colorScheme='cyan' mx='1'>View More</Button></Link></Center>
            </AbsoluteCenter>
        </Box>
    )
}

export default Projects