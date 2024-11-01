import { Box, Heading } from "@chakra-ui/react";
import ProductList from "./lists/ProductList";

function Product() {
  return (
    <>   
    <Heading mt={10} ml={10}>Produk</Heading> 
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      marginTop={"40px"}
      maxH={"100vh"}
      w={"100vw"}
      h={"100vh"}
      overflowY={'auto'}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none", // Internet Explorer and Edge
        "scrollbar-width": "none", // Firefox
      }}
    >
    
      <Box h={"90vh"} display={"flex"} flexDir={"row"}>
        <ProductList />
      </Box>
    </Box>
    </>

  );
}

export default Product;
