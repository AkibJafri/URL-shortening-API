//Navbar.jsx
import React from 'react'
import {
  Flex,
  Box,
  Link,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  // Render null if it's a mobile-sized screen
  if (isMobile) {
    return null
  }
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg="transparent"
      position={'absolute'}
    >
      <Box>
        <IconButton mx={8} bg={'transparent'} />
        <Link mr={4} fontSize={'lg'} color="white">
          Home
        </Link>
        <Link mr={4} fontSize={'lg'} color="white">
          shop
        </Link>
        <Link bg={'transparent'} fontSize={'lg'} mr={4} color="white">
          about
        </Link>
        <Link bg={'transparent'} fontSize={'lg'} color="white">
          contact
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar
