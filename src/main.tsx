import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';



const theme = extendTheme({
  config: {
    initialColorMode: 'dark', 
    useSystemColorMode: false, 
  },
  colors: {
    brand: {
      50: '#f0e4ff',
      100: '#d1c1f4',
      200: '#b39ee9',
      300: '#947adb',
      400: '#7657cf',
      500: '#5c3da6',
      600: '#472f80',
      700: '#33215b',
      800: '#1e1335',
      900: '#0a0510',
    },
    colorsText: 'red'
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>
  </StrictMode>,
)
