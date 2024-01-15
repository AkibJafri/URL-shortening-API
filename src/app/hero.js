'use client'
import { Box, Heading } from '@chakra-ui/react'

function hero() {
  return (
    <Box bgColor={'grey.100'}>
      <Heading>
        Advanced{' '}
        <Box position={'relative'}>
          <Box position={'absolute'} height={'100%'} width={'100%'}>
            <Box mx={'auto'} height={'100%'} width={'1'} bgColor={'blue.400'} />
          </Box>
        </Box>
        Statistic
      </Heading>
    </Box>
  )
}

export default hero
