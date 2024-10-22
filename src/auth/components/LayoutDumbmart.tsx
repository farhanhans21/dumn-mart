import { Box, Button, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Frame@3x.png";
import nama from "../../assets/Group 7.png";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../../ui/Button";
function LayoutDumbmart() {
  return (
    <Box
      display={"flex"}
      w={"100%"}
      h={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      // bgColor={"white"}
      flexDirection={"column"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image boxSize="200px" src={logo} alt="Logo" />
        <Image src={nama} alt="Logo" />
      </Box>
      <Box display={"flex"} flexDirection={"row"} w={"50%"}>
        <Text fontSize="20px" fontWeight="bold">
          Go shopping for marchendise, just go to dumb merch shopping, the
          biggest mercendice in indonesia
        </Text>
      </Box>
      <Box
        mt={5}
        display={"flex"}
        flexDirection={"row"}
        w={"70%"}
        gap={10}
        justifyContent={"space-around"}
      >
        <ButtonLink bgColor={"#F74D4D"} to={"/"} w={"50%"} display={"flex"} rounded={3} justifyContent={"center"} alignItems={"center"} h={'30px'}>
        <Text fontWeight='medium'>Login</Text> 
        </ButtonLink>
        <ButtonLink bgColor={"#F74D4D"} to={"/register"} h={'30px'} display={"flex"} rounded={3} justifyContent={"center"} alignItems={"center"} w={"50%"}>
          <Text fontWeight='medium'>Register</Text>
        </ButtonLink>
      </Box>
    </Box>
  );
}

export default LayoutDumbmart;
