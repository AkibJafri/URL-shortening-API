// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  Card,
  Input,
  Grid,
  SimpleGrid,
  GridItem,
  IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Drawer,
  Container,
  Center,
} from '@chakra-ui/react'

import { useState } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'
import Navbar from './Navbar'

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <Box maxWidth="full">
      <Container maxW={'full'}>
        <Box>
          {/* Desktop Navigation */}
          <Flex
            as="nav"
            align="center"
            justify={{ base: 'space-between', lg: 'space-between' }}
            wrap="wrap"
            padding="1.5rem"
            bg="transparent"
            color="white"
            display={{ base: 'none', lg: 'flex' }}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Flex ml={{ base: '0', lg: '90px' }}>
              <Box>
                <Image src="logo.svg" alt="Logo" mr={4} />
              </Box>
              <Button variant="ghost" mr={4} color={'gray'} fontWeight={'700'}>
                Features
              </Button>
              <Button variant="ghost" mr={4} color={'gray'} fontWeight={'700'}>
                Pricing
              </Button>
              <Button variant="ghost" mr={4} color={'gray'} fontWeight={'700'}>
                Resources
              </Button>
            </Flex>

            <Box display="flex" mr={8} color={'gray'} fontWeight={'700'}>
              <Button variant="ghost" mr={4}>
                Login
              </Button>
              <Button colorScheme={'teal'} mr={4} px={8} rounded={'3xl'}>
                Sign Up
              </Button>
            </Box>
          </Flex>

          {/* Mobile Navigation */}
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="transparent"
            color="white"
            display={{ base: 'flex', lg: 'none' }}
          >
            <Flex align="center">
              <Image src="logo.svg" alt="Logo" />
            </Flex>
            <IconButton
              aria-label="Open Mobile Navigation"
              icon={<HamburgerIcon />}
              onClick={() => toggleMobileNav()}
            />
          </Flex>
          <Navbar />
          {/* Mobile Drawer Navigation */}
          <Drawer
            placement="right"
            onClose={() => setIsMobileNavOpen(false)}
            isOpen={isMobileNavOpen}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody mt={10} display="flex" flexDirection="column">
                  <Button variant="ghost" mb={4}>
                    Home
                  </Button>
                  <Button variant="ghost" mb={4}>
                    New
                  </Button>
                  <Button variant="ghost" mb={4}>
                    Popular
                  </Button>
                  <Button variant="ghost" mb={4}>
                    Trending
                  </Button>
                  <Button variant="ghost" mb={4}>
                    Categories
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            my={{ base: '10', lg: '20' }}
          >
            <GridItem
              colSpan={{
                base: 12,
                lg: 6,
              }}
              colStart={{
                base: 0,
                lg: 7,
              }}
              rowStart={{
                base: 0,
              }}
            >
              <Box>
                <Image
                  src="illustration-working.svg"
                  alt="image"
                  position={'relative'}
                  left={{ base: '10%', md: '10%' }}
                  top={'0'}
                  // w={{ base: '368', lg: '600' }}
                  // h={{ base: '353', lg: '479' }}
                  bgSize={'110%'}
                  bgPosition={'center'}
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={{
                base: 12,
                lg: 6,
              }}
              colStart={{
                base: 0,
                lg: 0,
              }}
              rowStart={{
                base: 0,
                lg: 1,
              }}
            >
              <Box>
                <Container>
                  <Box
                    textAlign={{ base: 'center', lg: 'left' }}
                    // mx={{ lg: '120' }}
                    // my={{ base: '', lg: '58' }}
                    mb={20}
                  >
                    <Heading
                      fontSize={{ base: '4xl', lg: '6xl' }}
                      lineHeight={1}
                      fontWeight={'800'}
                    >
                      More than just shorter links
                    </Heading>
                    <Text
                      color={'gray.400'}
                      p={3}
                      fontSize={{ base: 'xl', lg: '2xl' }}
                    >
                      Build your brand’s recognition and get detailed insights
                      on how your links are performing.
                    </Text>
                    <Button
                      colorScheme="teal"
                      rounded={'3xl'}
                      mt={6}
                      px={'10'}
                      py={'7'}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Container>
              </Box>
            </GridItem>
          </Grid>

          <Container maxW="full" bg="#EDF2F7" py={{ base: '6', lg: '10' }}>
            {/* input btn sct */}
            <Card
              mt={12}
              position={'relative'}
              p={{ base: '5', lg: '10' }}
              bgColor={'purple.900'}
              overflow={'hidden'}
              display={'flex'}
              flexDirection={{ base: 'column', lg: 'row' }}
              gap={4}
              borderRadius={'lg'}
              mx={{ base: '15px', lg: '200px' }}
              h={{ base: '', lg: '120' }}
              // my={{ base: '-20', lg: '-36' }}
              top={-36}
            >
              <Image
                src="bg-shorten-mobile.svg"
                alt="input"
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                position={'absolute'}
                top={0}
                right={0}
              />

              <Input
                placeholder="Shorten a link here..."
                size="md"
                bgColor={'white'}
                flexShrink={1}
                fontWeight={'600'}
                color={'gray'}
              />

              <Button colorScheme="teal" flexShrink={0} px={8}>
                Shorten It!
              </Button>
            </Card>

            {/* Hero sct */}
            <Container maxW={'6xl'} my={{ base: '40', lg: '40' }}>
              <Box bgColor={'grey.300'} textAlign={'center'} spacing={4}>
                <Box>
                  <Box>
                    <Heading
                      fontSize={{ base: '3xl', lg: '5xl' }}
                      lineHeight={'1'}
                      mt={-40}
                      textAlign={'Center'}
                    >
                      Advanced Statistics
                    </Heading>
                    <Container mb={'16'}>
                      <Text
                        fontSize={{ base: 'md', lg: 'xl' }}
                        mt={4}
                        color={'gray'}
                        textAlign={'center'}
                        lineHeight={'1'}
                      >
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                      </Text>
                    </Container>
                  </Box>

                  {/* card start */}
                  <Box position={'relative'}>
                    {/* Line */}
                    <Box>
                      <Box
                        height={'2'}
                        width={'full'}
                        bgColor={'blue.400'}
                        position={'absolute'}
                        top={'60%'}
                        display={{ base: 'none', md: 'block' }}
                      />
                      <Box
                        height={'100%'}
                        width={'2'}
                        bgColor={'blue.400'}
                        position={'absolute'}
                        display={{ base: 'block', md: 'none' }}
                        left={'49%'}
                      />
                      {/* end line */}
                      <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        // Display 1 column on base, 2 columns on sm (small), and 3 columns on md (medium) and larger
                        spacing={{ base: '2', md: '10' }}
                        textAlign={{ base: 'centar', md: 'left' }}
                        // justify={'centar'}
                      >
                        {/* card one */}
                        <Card
                          bgColor={'white'}
                          textAlign={{ base: 'centar', md: 'left' }}
                        >
                          <Image
                            src="icon-brand-recognition.svg"
                            alt=""
                            bgColor={'#2D3748'}
                            p={'9px'}
                            objectFit={'cover'}
                            bgPosition={'center'}
                            rounded={'full'}
                            w={{ base: '45px', lg: '50px' }}
                            h={{ base: '45px', lg: '50px' }}
                            mx={{ base: 'auto', lg: '6' }}
                            mt={{ base: '-5', lg: '-6' }}
                          />

                          <Box p={{ base: '2', md: '6' }}>
                            <Text fontSize={'lg'} fontWeight={'bold'}>
                              Brand Recognition
                            </Text>
                            <Text
                              fontSize={'sm'}
                              color={'grey'}
                              py={4}
                              fontWeight={'600'}
                            >
                              Boost your brand recognition with each click.
                              Generic links don’t mean a thing. Branded links
                              help instill confidence in your content.
                            </Text>
                          </Box>
                        </Card>

                        {/* card Two */}
                        <Card bgColor={'white'} bottom={'-10'}>
                          <Image
                            src="/icon-fully-customizable.svg"
                            alt=""
                            bgColor={'#2D3748'}
                            p={'9px'}
                            objectFit={'cover'}
                            bgPosition={'center'}
                            rounded={'full'}
                            w={{ base: '45px', lg: '50px' }}
                            h={{ base: '45px', lg: '50px' }}
                            mx={{ base: 'auto', lg: '6' }}
                            mt={{ base: '-5', lg: '-6' }}
                          />

                          <Box p={{ base: '2', md: '6' }}>
                            <Text fontSize={'lg'} fontWeight={'bold'}>
                              Fully Customizable
                            </Text>
                            <Text
                              fontSize={'sm'}
                              color={'grey'}
                              py={4}
                              fontWeight={'600'}
                            >
                              Gain insights into who is clicking your links.
                              Knowing when and where people engage with your
                              content helps inform better decisions.
                            </Text>
                          </Box>
                        </Card>

                        {/* card three */}
                        <Card bgColor={'white'} bottom={'-20'}>
                          <Image
                            src="icon-detailed-records.svg"
                            alt=""
                            bgColor={'#2D3748'}
                            rounded={'full'}
                            p={'9px'}
                            objectFit={'cover'}
                            bgPosition={'center'}
                            w={{ base: '45px', lg: '50px' }}
                            h={{ base: '45px', lg: '50px' }}
                            mx={{ base: 'auto', lg: '6' }}
                            mt={{ base: '-5', lg: '-6' }}
                          />
                          <Box p={{ base: '2', md: '6' }}>
                            <Text fontSize={'lg'} fontWeight={'bold'}>
                              Detailed Records
                            </Text>
                            <Text
                              fontSize={'sm'}
                              color={'grey'}
                              py={4}
                              fontWeight={'600'}
                            >
                              Improve brand awareness and content
                              discoverability through customizable links,
                              supercharging audience engagement.
                            </Text>
                          </Box>
                        </Card>
                      </SimpleGrid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Container>

          {/* Boost Linl sct */}
          <Card
            position={'relative'}
            display={'flex'}
            justify={'center'}
            align={'center'}
            objectFit={'contain'}
            my={{ base: '10', lg: '16' }}
            bgColor={{ base: 'transparent' }}
          >
            {/* Mobile Image */}
            <Image
              position={'absolute'}
              src="bg-boost-mobile.svg"
              alt=""
              bg={'purple.900'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              w={'full'}
              h={'200px'}
              zIndex={-1} // Push the mobile image to the background
              display={{ base: 'initial', lg: 'none' }} // Show on mobile, hide on larger screens
            />

            {/* Desktop Image */}
            <Image
              position={'absolute'}
              src="bg-boost-desktop.svg" // Adjust the path to your desktop image
              alt=""
              bg={'purple.900'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              w={'full'}
              h={'300px'} // Adjust the height for the desktop image
              zIndex={-1} // Push the desktop image to the background
              display={{ base: 'none', lg: 'initial' }} // Hide on mobile, show on larger screens
            />

            <Text
              fontSize={{ base: 'lg', lg: '4xl' }}
              color={'white'}
              fontWeight={'bolder'}
              zIndex={2}
              mb={2}
            >
              Boost your links today
            </Text>

            <Button
              colorScheme={'teal'}
              rounded={'3xl'}
              mt={'4'}
              px={10}
              fontSize={'xl'}
            >
              Get Started
            </Button>
          </Card>

          {/* Footer Sct */}
          <Box bgColor={'black'} py={6} px={4} textAlign={'center'} mx={'auto'}>
            {/* Sections */}
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'center', md: 'flex-start' }}
              justify={{ base: 'center', md: 'space-between' }}
              mt={{ base: 8, md: 0 }}
              maxW={{ base: '100%', md: '900px' }}
              mx="auto"
            >
              <Box justify="center" mt={7}>
                <Image src="logo.svg" alt="Top Logo" w={{ base: 20, md: 24 }} />
              </Box>
              {/* Features Section */}
              <Box mt={{ base: 6, md: 0, lg: 8 }} mx={{ md: 4 }}>
                <Heading fontSize={'lg'} color={'white'} mb={4}>
                  Features
                </Heading>
                <Box color={'lightslategray'} cursor={'pointer'}>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    Links Shortening
                  </Text>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    Branded Links
                  </Text>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    Analytics
                  </Text>
                </Box>
              </Box>

              {/* Resources Section */}
              <Box
                color={'lightslategray'}
                cursor={'pointer'}
                mt={{ base: 6, md: 0, lg: 8 }}
                mx={{ md: 4 }}
              >
                <Heading
                  fontSize={'lg'}
                  color={'white'}
                  mb={4}
                  fontWeight={'bolder'}
                >
                  Resources
                </Heading>
                <Text fontSize={'sm'} color={'white'} p={2}>
                  Blog
                </Text>
                <Text fontSize={'sm'} color={'white'} p={2}>
                  Developers
                </Text>
                <Text fontSize={'sm'} color={'white'} p={2}>
                  Support
                </Text>
              </Box>

              {/* Company Section */}
              <Box mt={{ base: 6, md: 0, lg: 8 }} mx={{ md: 4 }}>
                <Heading
                  fontSize={'lg'}
                  color={'white'}
                  mb={4}
                  fontWeight={'bolder'}
                >
                  Company
                </Heading>
                <Box color={'lightslategray'} cursor={'pointer'}>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    About{' '}
                  </Text>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    Our Team{' '}
                  </Text>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    Careers
                  </Text>
                  <Text fontSize={'sm'} color={'white'} p={2}>
                    Contact
                  </Text>
                </Box>
              </Box>

              {/* Social Media Links */}
              <Flex justify="center" mt={8}>
                <Box mx={2}>
                  <Image src="/icon-facebook.svg" alt="Facebook" w={6} h={6} />
                </Box>
                <Box mx={2}>
                  <Image src="/icon-pinterest.svg" alt="Twitter" w={6} h={6} />
                </Box>
                <Box mx={2}>
                  <Image
                    src="/icon-instagram.svg"
                    alt="Instagram"
                    w={6}
                    h={6}
                  />
                </Box>
                <Box mx={2}>
                  <Image src="/icon-twitter.svg" alt="Instagram" w={6} h={6} />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
