import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LayoutDumbmart from "./LayoutDumbmart";

export function Layout() {
  return (
    <>
      <Box
        display={"flex"}
        h={"100vh"}
        flexDirection={"row"}
        backgroundColor={"white"}
        w={"100%"}
      >
        <Box
          display={"flex"}
          maxW={"50%"}
          w={"100%"}
          backgroundColor={"black"}
          h={"100vh"}
        >
          <LayoutDumbmart/>
        </Box>
        <Box
          display={"flex"}
          maxW={"50%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"black"}
          h={"100vh"}
        >
          <Outlet/>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
