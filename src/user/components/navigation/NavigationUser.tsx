import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../../../assets/Frame.svg";
import { ButtonLink } from "../../../ui/Button";
function NavigationUser() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      h={'14vh'}
      width={"100vw"}
    >
      <ButtonLink to={"/"} w={"50%"}>
        <Image boxSize="70px" src={logo} ml={7} mt={3} alt="Logo" />
      </ButtonLink>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        w={"30%"}
        alignItems={"center"}
      >
        <ButtonLink
          color={"red"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/complain"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Complain</Text>
        </ButtonLink>
        <ButtonLink
          color={"red"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/profile-user"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Profile</Text>
        </ButtonLink>
        <ButtonLink
          color={"red"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/login"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Logout</Text>
        </ButtonLink>
      </Box>
    </Box>
  );
}

export default NavigationUser;
