import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea
} from "@chakra-ui/react";
function EditProfile() {
  return (
    <>
      <Container maxW={"80%"} display={"flex"} justifyContent={'center'} flexDir={"row"}> 
          <Box w={'50%'} bgColor={'white'}> 
          <Card size={"sm"} align={'stretch'}>
            <CardBody bgColor={"black"} color={"white"}>
              <Heading color={"red"}>Edit Profile</Heading>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Phone</FormLabel>
                <Input placeholder="Phone" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Gender</FormLabel>
                <Select
                  placeholder="Select gender"
                  bgColor={"#D2D2D2"}
                  color={"black"}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="Description" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Image
                </FormLabel>
                <Input type="file" border={'none'} />
              </FormControl>
              <Box display={"flex"} justifyContent={"end"}>
                <Button type="submit" mt={2} colorScheme="red">
                  Save
                </Button>
              </Box>
            </CardBody>
          </Card>
          </Box>
      </Container>
    </>
  );
}

export default EditProfile;
