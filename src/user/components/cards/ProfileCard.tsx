import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ButtonLink } from "../../../ui/Button";

function ProfileCard() {
  
  return (
    <>
      <Box mt={"20px"} ml={"40px"} display={"flex"} flexDir={'row'} justifyContent={"space-between"}>
        <Heading color={"red"}>My Profile</Heading>
        <ButtonLink
          bgColor={'none'}
          to={"/edit-profile"}
          w={"50px"}
          display={"flex"}
          rounded={3}
          _hover={{bgColor:'outline'}}
          mr={'40px'}
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Text fontWeight="bold">Edit</Text>
        </ButtonLink>
      </Box>
      <Card mt={4} bgColor={"black"}>
        <CardBody display={"flex"} flexDir={"row"} ml={6}>
          <HStack spacing={6}>
            <Image
              h={"50vh"}
              w={'50vh'}
              rounded={10}
              objectFit={"cover"}
              src="https://images.inc.com/uploaded_files/image/1024x576/getty_481292845_77896.jpg"
            />
              <VStack spacing={3} align={"stretch"}>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Nama
                  </Text>
                  <Text color={"white"}>Farhan Pratama</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Email
                  </Text>
                  <Text color={"white"}>Farhan@gmail.com</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Phone
                  </Text>
                  <Text color={"white"}>098768868</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Gender
                  </Text>
                  <Text color={"white"}>male</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Address
                  </Text>
                  <Text color={"white"}>Jalan Sawangan nomor 5a Depok Jawa Barat</Text>
                </Box>
              </VStack>
          </HStack>
          
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCard;
