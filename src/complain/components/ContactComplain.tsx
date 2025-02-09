import { Box, VStack } from "@chakra-ui/react";
import ComplainCard from "../card/ComplainCard";

function ContactComplain() {
  return (
    <>
      <Box
        w={"30vw"}
        h={"85vh"}
        display={"flex"}
        flexDir={"column"}
        overflowY={"auto"}
        // position={"fixed"}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // Internet Explorer and Edge
          "scrollbar-width": "none", // Firefox
        }}
      >
        <VStack spacing={1}>
          <ComplainCard />
        </VStack>
      </Box>
    </>
  );
}

export default ContactComplain;
