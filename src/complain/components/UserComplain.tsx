import { Box, Stack } from "@chakra-ui/react";
import ChatWindow from "./ChatWindow";

function UserComplain() {
  return (
    <Box
      p={4}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"end"}
      // sx={{ overflowY: "auto" }}
    >
      <Stack direction={"column"} justifyContent={"space-between"}>
        <ChatWindow />
        
      </Stack>
      
    </Box>
  );
}

export default UserComplain;
