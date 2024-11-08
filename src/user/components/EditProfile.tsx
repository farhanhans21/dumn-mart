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
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import { UpdateProfileSchema } from "../../schemas/profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileAsync } from "../../Redux/profile/async";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
function EditProfile() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const profile = useAppSelector((state) => state.profile.entities)
  const {register, handleSubmit} = useForm<UpdateProfileSchema>({
    resolver: zodResolver(UpdateProfileSchema),
  })
  

  const onSubmit = async (dataProfile: UpdateProfileSchema) => {
    const formData = new FormData();
    
    formData.append("firstName", dataProfile.firstName || "")
    formData.append("lastName", dataProfile.lastName || "")
    formData.append("address", dataProfile.address || "")
    formData.append("phone", dataProfile.phone || "")
    formData.append("gender", dataProfile.gender || "")

    if (dataProfile.image && dataProfile.image.length > 0)  {
      formData.append("image", dataProfile.image[0]);
    }
    await dispatch(editProfileAsync(formData));
    profile ? console.log("has been updated"): console.log("cannot update, error")
    navigate('/profile')
  }

  
  
  return (
    <>
      <Container maxW={"80%"} display={"flex"} justifyContent={'center'} flexDir={"row"}> 
          <Box w={'50%'}> 
          <Card size={"sm"} align={'stretch'}>
            <CardBody bgColor={"black"} color={"white"}>
              <Heading color={"red"}>Edit Profile</Heading>
              <form onSubmit={handleSubmit(onSubmit, (error)=>console.log(error))}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First Name"{...register("firstName")} />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" {...register("lastName")}/>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Phone</FormLabel>
                <Input placeholder="Phone" {...register("phone")} />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Gender</FormLabel>
                <Select
                  placeholder="Select gender"
                  bgColor={"#D2D2D2"}
                  color={"black"}
                  {...register("gender")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder="Address"{...register("address")} />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Image
                </FormLabel>
                <Input type="file" {...register("image")} border={'none'} />
              </FormControl>
              <Box display={"flex"} justifyContent={"end"}>
                <Button type="submit" mt={2} colorScheme="red">
                  Save
                </Button>
              </Box>
              </form>
            </CardBody>
          </Card>
          </Box>
      </Container>
    </>
  );
}

export default EditProfile;
