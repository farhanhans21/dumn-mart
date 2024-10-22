import { extendTheme } from "@chakra-ui/react";


export const costumeTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black', // Dark background
        color: 'white', // Default text color
      },
    },
    fonts:{
      heading: "Outfit, sans-serif",
      body: "Inter, sans-serif",
    },
  },
})