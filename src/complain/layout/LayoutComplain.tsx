import { Box, Button, Flex, HStack, Input } from "@chakra-ui/react";
import ContactComplain from "../components/ContactComplain";
import UserComplain from "../components/UserComplain";

function LayoutComplain() {
  return (
    <>
      <Box>
        <Flex flexDirection={"row"}>
          <Box
            w={"30%"}
            h={"75vh"}
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none", // Internet Explorer and Edge
              "scrollbar-width": "none", // Firefox
            }}
          >
            <ContactComplain />
          </Box>
          <Box w={"70%"}>
            <Box
              h={"75vh"}
              sx={{
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none", // Internet Explorer and Edge
                "scrollbar-width": "none", // Firefox
              }}
            >
              <UserComplain />
            </Box>
            <HStack>
              <Input type="text" placeholder="Write your complain here..." />
              <Button>Submit</Button>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default LayoutComplain;
