// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  colors: {
    brand: {
      900: 'red',
    },
  },
})

export function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
