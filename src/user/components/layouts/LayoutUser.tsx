import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavigationUser from "../navigation/NavigationUser";

function LayoutUser() {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100vw"}>
      <NavigationUser />
      <Box h={'10vh'}>
        <Outlet />
      </Box>
    </Box>
  
  );
}

export default LayoutUser;
