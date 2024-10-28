import { Box, Flex } from "@chakra-ui/react";
import ContactComplain from "../components/ContactComplain";
import UserComplain from "../components/UserComplain";

function LayoutComplain() {
  return (
    <>
      <Box overflowY={"hidden"}>
        <Flex flexDirection={"row"}>
          <Box w={"30%"}  sx = {{overflowY:'auto'}}>
            <ContactComplain />
          </Box>
          <Box w={"70%"} sx = {{overflowY:'auto'}}>
            <UserComplain />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default LayoutComplain;
