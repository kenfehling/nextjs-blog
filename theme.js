import { extendTheme } from '@chakra-ui/react'

const colors = {
    primary: {
        50: '#FF8000',
        500: '#FF9900',
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  

export default extendTheme({
    colors,
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    }
})