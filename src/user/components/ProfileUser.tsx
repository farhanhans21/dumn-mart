import { Box } from "@chakra-ui/react";
import ProfileCard from "./cards/ProfileCard";
import UserPoductList from "./lists/UserPoductList";

function ProfileUser() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} h={"auto"}>
        <Box w={"50%"}>
          <ProfileCard />
        </Box>
        <Box
          w={"50%"}
          h={"100vh"}
          gap={2}
          overflowY={"auto"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none", // Internet Explorer and Edge
            "scrollbar-width": "none", // Firefox
          }}
        >
          <UserPoductList />
        </Box>
      </Box>
    </>
  );
}

export default ProfileUser;
