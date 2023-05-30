import React from 'react'
import { useBreakpointValue, Box, AbsoluteCenter, Center, Text, Flex, Stack, Button, Card, CardBody, CardFooter } from '@chakra-ui/react'
import { SiBitcoin } from "react-icons/si"

const Projects = () => {
    // The following will be changing the sizes of the fonts based on the screen sizes
    const headingFontSize = useBreakpointValue({ base: 'lg', sm: 'xl', md: '3xl', lg: '5xl' });
    const secondHeadingFontSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'xl', lg: '3xl' });
    const paragraphFontSize = useBreakpointValue({ base: 'xs', sm: '2xs', md: 'sm', lg: 'lg' });

    return (
        <Box position='relative' h='1000px'>
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
                                <Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button>
                                <Button variant='outline' colorScheme='cyan' mx='1'>Code</Button>
                            </CardFooter>
                        </Stack>
                    </Card>
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
                                <Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button>
                                <Button variant='outline' colorScheme='cyan' mx='1'>Code</Button>
                            </CardFooter>
                        </Stack>
                    </Card>
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
                                <Button variant='outline' colorScheme='cyan' mx='1'>Demo</Button>
                                <Button variant='outline' colorScheme='cyan' mx='1'>Code</Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Flex>
                <br></br>
                <Center><Button variant='solid' color='#212121' colorScheme='cyan' mx='1'>View More</Button></Center>
            </AbsoluteCenter>
        </Box>
    )
}

export default Projects