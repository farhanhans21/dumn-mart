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
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect } from "react";
import { getProfileAsync } from "../../../Redux/profile/async";

function ProfileCard() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.entities)
  
  useEffect(() => {
    dispatch(getProfileAsync())
  },[dispatch])
  
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
              src={profile?.image}
            />
              <VStack spacing={3} align={"stretch"}>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Nama
                  </Text>
                  <Text color={"white"}>{profile?.fullname}</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Email
                  </Text>
                  <Text color={"white"}>{profile?.email}</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Phone
                  </Text>
                  <Text color={"white"}>{profile?.phone}</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Gender
                  </Text>
                  <Text color={"white"}>{profile?.gender}</Text>
                </Box>
                <Box>
                  <Text fontWeight={"medium"} color={"red"}>
                    Address
                  </Text>
                  <Text color={"white"}>{profile?.address}</Text>
                </Box>
              </VStack>
          </HStack>
          
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCard;
