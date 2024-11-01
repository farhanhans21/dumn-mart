import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "../../schemas/auth-shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { registerAsync } from "../../Redux/auth/async";

function Register() {
  const { register, handleSubmit } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  const onSubmit = async (data: RegisterSchema) => {
    await dispatch(registerAsync(data));
    if (user.entities) {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box w={"25vw"} pt={4} h={"55vh"} bgColor={"#181818"} rounded={"2%"}>
        <Box w={"23vw"} justifyContent={"center"} ml={4}>
          <Heading mb={4}>Register</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5}>
              <FormControl>
                <Input
                color={"black"}
                  type="text"
                  {...register("name")}
                  bgColor={"#D2D2D2"}
                  placeholder="Name"
                />
              </FormControl>
              <FormControl>
                <Input
                color={"black"}
                  type="email"
                  {...register("email")}
                  bgColor={"#D2D2D2"}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl>
                <Input
                color={"black"}
                  type="password"
                  {...register("password")}
                  bgColor={"#D2D2D2"}
                  placeholder="Password"
                />
              </FormControl>
              <FormControl>
                <Select
                  placeholder="Select option"
                  bgColor={"#D2D2D2"}
                  color={"black"}
                  {...register("role")}
                >
                  <option value="USER">Customer</option>
                  <option value="ADMIN">Trader</option>
                </Select>
              </FormControl>
              <Button type="submit" bgColor={"#F74D4D"} w={"100%"}>
                Save
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
