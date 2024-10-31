import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

function Register() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
    >
      <Box w={"25vw"} pt={4} h={"40vh"} bgColor={'#181818'} rounded={'2%'}>
          <Box w={'23vw'} justifyContent={'center'} ml={4} >
          <Heading mb={4}>Register</Heading>
          <FormControl>
        <VStack spacing={5}>
            <Input type="text" bgColor={'#D2D2D2'} placeholder="Name" />
            <Input type="email" bgColor={'#D2D2D2'} placeholder="Email" />
            <Input type="password" bgColor={'#D2D2D2'} placeholder="Password" />
            <Button  bgColor={"#F74D4D"} w={"100%"}>
              ganteng
            </Button>
        </VStack>
          </FormControl>
          </Box>
      </Box>
    </Box>
  )
}

export default Register