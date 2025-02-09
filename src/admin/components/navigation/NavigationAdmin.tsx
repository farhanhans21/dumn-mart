import { Box, Image, Text } from "@chakra-ui/react";
import { ButtonLink } from "../../../ui/Button";
import logo from "../../../assets/Frame.svg";
import { useAppDispatch } from "../../../store/store";
import { LOGOUT } from "../../../Redux/auth/slice";
import { useNavigate } from "react-router-dom";
function NavigationAdmin() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const remove =  async() => {
    dispatch(LOGOUT())
    navigate('/login')
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      width={"100vw"}
    >
      <ButtonLink to={"/user"} w={"50%"}>
        <Image boxSize="70px" src={logo} ml={7} mt={5} alt="Logo" />
      </ButtonLink>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        
        w={"50%"}
        mr={2}
        alignItems={"center"}
      >
        <ButtonLink
          color={"white"}
          _hover={{ color: "red" }}
          fontWeight={"medium"}
          to={"admin"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Dashboard</Text>
        </ButtonLink>

        <ButtonLink
          color={"white"}
          _hover={{ color: "red" }}
          fontWeight={"medium"}
          to={"transaction"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Transaction</Text>
        </ButtonLink>

        <ButtonLink
          color={"white"}
          _hover={{ color: "red" }}
          fontWeight={"medium"}
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
          _hover={{ color: "red" }}
          to={"/admin"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Category</Text>
        </ButtonLink>

        <ButtonLink
          color={"white"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/list-products"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="medium">Product</Text>
        </ButtonLink>

        <ButtonLink
          color={"white"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          onClick={()=> {remove()}}
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

export default NavigationAdmin;
