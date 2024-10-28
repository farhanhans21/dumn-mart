import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack
} from "@chakra-ui/react";

function EditProduct() {
  return (
    <>
      <Container mt={15} maxW={"70vw"}>
        <Heading>Edit Product</Heading>

        <FormControl>
          <VStack mt={10} spacing={7} align={"stretch"}>
            <Button bgColor={"#F74D4D"} w={"10vw"}>
              Input Image
            </Button>
            <Input placeholder="Product name" color={"white"} border={"none"} bgColor={"#757474"} _placeholder={{color:"white"}}/>
            <Input placeholder="Product Decs" color={"white"} border={"none"} bgColor={"#757474"} _placeholder={{color:"white"}}/>
            <Input placeholder="Price" color={"white"} border={"none"} bgColor={"#757474"} _placeholder={{color:"white"}}/>
            <Input placeholder="Quantity" color={"white"} border={"none"} bgColor={"#757474"} _placeholder={{color:"white"}}/>
            <Button bgColor={'#54d44c'}>
      Submit
    </Button>
          </VStack>
        </FormControl>
      </Container>
    </>
  );
}

export default EditProduct;
