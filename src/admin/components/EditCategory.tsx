import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

function EditCategory() {
  return (
    <>
      <Container mt={15} maxW={"70vw"}>
        <VStack spacing={"15vh"} align={"stretch"}>
          <Heading>Edit categori</Heading>
          <FormControl>
            <Input border={"none"} bgColor={"#212121"} />
          </FormControl>
          <Button bgColor={"#54d44c"}>Submit</Button>
        </VStack>
      </Container>
    </>
  );
}

export default EditCategory;
