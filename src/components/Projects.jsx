import React from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Center, Text, Flex, Stack, Button, Link, Card, CardBody, CardFooter } from '@chakra-ui/react'

const Projects = () => {
    // The following will be changing the sizes of the fonts based on the screen sizes
    const headingFontSize = useBreakpointValue({ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' });
    const secondHeadingFontSize = useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' });
    const paragraphFontSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'lg', lg: '2xl' });

    return (
        <Box id='projects' position='relative' h='1100px'>
            <AbsoluteCenter w="80%">
                <Text as='h2' fontSize={ headingFontSize } color='cyan.400' whiteSpace='nowrap'>Projects</Text>
                <Flex direction={{ base: 'column', xl: 'row' }} spacing={4}>
                    <Card overflow='hidden' variant='outline' borderColor='cyan.400' bg='#212121' m='1'>
                        <Stack>
                            <CardBody>
                                <Text fontSize={ secondHeadingFontSize } color='cyan.400'>Crypto Tracker</Text>
                                <Text fontSize={ paragraphFontSize } color='white' py='2'>
                                    Leveraging CoinGecko's API, this app provides real-time data on 50 cryptocurrencies,
                                    including current prices, market capitalization, trading volumes, and percentage changes,
                                    keeping users informed and up-to-date.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='https://kryptotracker.netlify.app/' target='_blank'><Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button></Link>
                                <Link href='https://github.com/Thanushan925/krypto-tracker' target='_blank'><Button variant='outline' colorScheme='cyan' mx='1'>Code</Button></Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card overflow='hidden' variant='outline' borderColor='cyan.400' bg='#212121' m='1'>
                        <Stack>
                            <CardBody>
                                <Text fontSize={ secondHeadingFontSize } color='cyan.400'>Weather Tracker</Text>
                                <Text fontSize={ paragraphFontSize } color='white' py='2'>
                                Stay informed and prepared with our Weather Tracker, powered by the OpenWeatherMap API,
                                providing real-time temperature, forecasts, humidity, wind speeds, and more for any location
                                you desire.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='https://ts-weatherverse.netlify.app/' target='_blank'><Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button></Link>
                                <Link href='https://github.com/Thanushan925/weatherverse' target='_blank'><Button variant='outline' colorScheme='cyan' mx='1'>Code</Button></Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card overflow='hidden' variant='outline' borderColor='cyan.400' bg='#212121' m='1'>
                        <Stack>
                            <CardBody>
                                <Text fontSize={ secondHeadingFontSize } color='cyan.400'>Pokémon Battle Game</Text>
                                <Text fontSize={ paragraphFontSize } color='white' py='2'>
                                    Experience the text-based Pokemon Battle Game featuring a short story and gameplay with
                                    fighting moves, items, and mega evolution. It also has type advantages and resistances,
                                    with an ultimate boss fight ending.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='https://replit.com/@FlamingNinja925/PokemonBattleSimulator?v=1' target='_blank'><Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button></Link>
                                <Link href='https://github.com/Thanushan925/pokemon-battle-simulator' target='_blank'><Button variant='outline' colorScheme='cyan' mx='1'>Code</Button></Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Flex>
                <br></br>
                <Center><Link href='https://github.com/Thanushan925' target='_blank'><Button variant='solid' color='#212121' colorScheme='cyan' mx='1'>View More</Button></Link></Center>
            </AbsoluteCenter>
        </Box>
    )
}

export default Projects