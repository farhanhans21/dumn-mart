import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { checkAsync, loginAsync } from "../../Redux/auth/async";
import { loginSchema, LoginSchema } from "../../schemas/auth-shema";
import { useAppDispatch, useAppSelector } from "../../store/store";

function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors, isLoading },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const onSubmit = async (data: LoginSchema) => {
    await dispatch(loginAsync(data));
    dispatch(checkAsync());
    // if (user.entities.token) {
    //   console.log("Logged In Successfully");
    //   navigate("/")
    // } else {
    //   console.log("Login Failed");
    // }
  };

  useEffect(() =>{
    if (user.entities.user?.role === "USER") {
      navigate("/")
    }
    else if (user.entities.user?.role === "ADMIN") {
      navigate("/admin")
    }
  }, [user,navigate])
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box w={"25vw"} pt={4} h={"35vh"} bgColor={"#181818"} rounded={"2%"}>
        <Box w={"23vw"} justifyContent={"center"} ml={4}>
          <Heading mb={4}>Login</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5}>
              <FormControl>
                <Input
                  type="text"
                  color={"black"}
                  {...register("username")}
                  bgColor={"#D2D2D2"}
                  placeholder="Username"
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  color={"black"}
                  {...register("password")}
                  bgColor={"#D2D2D2"}
                  placeholder="Password"
                />
              </FormControl>
              <Button type="submit" bgColor={"#F74D4D"} w={"100%"}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
