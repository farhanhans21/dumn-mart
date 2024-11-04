import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../../../assets/Frame.svg";
import { ButtonLink } from "../../../ui/Button";
import cart from "../../../assets/cart.svg"
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
        mr={2}
        alignItems={"center"}
      >
        <ButtonLink
          color={"white"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/cart"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Image src={cart} w={'2vw'}/>
        </ButtonLink>
        <ButtonLink
          color={"white"}
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
          color={"white"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/profile"}
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
          color={"white"}
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
