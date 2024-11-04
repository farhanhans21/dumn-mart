import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { CategorySchema } from "../../../schemas/category-schema";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { categoryCreateAsync } from "../../../Redux/category/async";
function CreateCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {register, handleSubmit} = useForm<CategorySchema>({
    resolver: zodResolver(CategorySchema),
  })
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category);
  const onSubmit = async (data: CategorySchema) => {
    await dispatch(categoryCreateAsync(data));
    if (category.entities) {
      console.log("Category created successfully");
    } else {
      console.log("Failed to create category");
    }
    onClose();
  }
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Create
      </Button>

      <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bgColor={"#212121"}>
          <ModalHeader>Create Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name Category</FormLabel>
              <Input  {...register("name")} placeholder="Name Category" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button  onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </form>
    </>
  );
}

export default CreateCategory;
