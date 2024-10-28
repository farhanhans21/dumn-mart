import { extendTheme } from "@chakra-ui/react";


export const costumeTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black', 
        color: 'white',
        // maxwidth: '100vh',
        // height: '100vh',
        // width: '100vh',
        // maxheight: '100vh',
        overflowX: "hidden",       
        overflowY: "auto",         
        "&::-webkit-scrollbar": { 
          display: "none"        
        },
        "-ms-overflow-style": "none", 
        "scrollbar-width": "none",
      },

    },
    fonts:{
      heading: "Outfit, sans-serif",
      body: "Inter, sans-serif",
    },

  },
})