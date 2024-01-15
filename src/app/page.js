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
} from '@chakra-ui/react'

import { useState } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }
  return (
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
        display={{ base: 'none', lg: 'flex' }} // Hide on mobile, show on desktop
      >
        <Flex ml={'90px'}>
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

        {/* Navigation Links */}
        <Box display="flex" mr={8} color={'gray'} fontWeight={'700'}>
          <Button variant="ghost" mr={4}>
            Login
          </Button>
          <Button colorScheme={'teal'} mr={4} px={8} rounded={'3xl'}>
            Sign Up
          </Button>

          {/* Add more navigation items as needed */}
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
        display={{ base: 'flex', lg: 'none' }} // Show on mobile, hide on desktop
      >
        <Flex align="center">
          <Image src="logo.svg" alt="Logo" />
        </Flex>
        <IconButton
          aria-label="Open Mobile Navigation"
          icon={<HamburgerIcon />}
          onClick={toggleMobileNav}
        />
      </Flex>

      {/* Mobile Drawer Navigation */}
      <Flex>
        <Drawer
          placement="right"
          onClose={toggleMobileNav}
          isOpen={isMobileNavOpen}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody
                mt={10}
                display={'flex'}
                flexDirection={'column'}
                alignSelf={'start'}
              >
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
                {/* Add more navigation items as needed */}
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>

      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
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
            <Image src="illustration-working.svg" alt="image" />
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
            <Box
              textAlign={{ base: 'center', lg: 'left' }}
              mx={{ lg: '120' }}
              my={{ lg: '58' }}
            >
              <Heading fontSize={{ base: '4xl', lg: '6xl' }}>
                More than just shorter links
              </Heading>
              <Text
                color={'gray.400'}
                p={3}
                fontSize={{ base: 'lg', lg: '2xl' }}
              >
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </Text>
              <Button
                colorScheme="pink"
                rounded={'3xl'}
                mt={6}
                px={'10'}
                py={'7'}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      <Card
        mt={10}
        position={'relative'}
        p={10}
        bgColor={'purple.900'}
        overflow={'hidden'}
        display={'flex'}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={4}
        borderRadius={'lg'}
        mx={{ base: '20px', lg: '200px' }}
        h={{ base: '', lg: '120' }}
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
          placeholder="just shorter links"
          size="md"
          bgColor={'white'}
          flexShrink={1}
        />

        <Button colorScheme="blue" flexShrink={0} px={8}>
          Shortning
        </Button>
      </Card>

      <Box
        bgColor={'grey.300'}
        py={{ base: '0', lg: 140 }}
        px={{ base: '0', lg: 200 }}
        textAlign={'center'}
        spacing={2}
      >
        <Box>
          <Box>
            <Box mb={'20'}>
              <Heading fontSize={'6xl'}>Advanced Statistic</Heading>
              <Text
                fontSize={{ base: 'xs', lg: '2xl' }}
                color={'grey.500'}
                p={4}
              >
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </Text>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 3 }} // Display 1 column on base, 2 columns on sm (small), and 3 columns on md (medium) and larger
              spacing={4}
            >
              <Card bgColor={'white'} mb={10}>
                <Image
                  src="icon-brand-recognition.svg"
                  alt=""
                  w={'35px'}
                  h={'35px'}
                  bgColor={'navy'}
                  p={'4px'}
                  rounded={'full'}
                  mx="auto"
                  mt={-4}
                />
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Brand Recognition
                </Text>
                <Text fontSize={'xs'} color={'grey.500'} p={4}>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instill confidence in
                  your content.
                </Text>
              </Card>

              <Card bgColor={'white'} mb={10}>
                <Image
                  src="/icon-fully-customizable.svg"
                  alt=""
                  w={'35px'}
                  h={'35px'}
                  bgColor={'navy'}
                  p={'4px'}
                  rounded={'full'}
                  mx="auto"
                  mt={-4}
                />
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Fully Customizable
                </Text>
                <Text fontSize={'xs'} color={'grey.500'} p={4}>
                  Customize your links to match your brand. No need for
                  technical skills.
                </Text>
              </Card>
              <Card bgColor={'white'} mb={10}>
                <Image
                  src="icon-detailed-records.svg"
                  alt=""
                  w={'35px'}
                  h={'35px'}
                  bgColor={'navy'}
                  p={'4px'}
                  rounded={'full'}
                  mx="auto"
                  mt={-4}
                />
                <Text fontSize={'lg'} fontWeight={'bold'}>
                  Detailed Records
                </Text>
                <Text fontSize={'xs'} color={'grey.500'} p={4}>
                  Gain insights into who is clicking your links. Knowing your
                  audience is key.
                </Text>
              </Card>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      <Card
        position={'relative'}
        display={'flex'}
        justify={'center'}
        align={'center'}
        my={10}
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
              <Image src="/icon-instagram.svg" alt="Instagram" w={6} h={6} />
            </Box>
            <Box mx={2}>
              <Image src="/icon-twitter.svg" alt="Instagram" w={6} h={6} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
