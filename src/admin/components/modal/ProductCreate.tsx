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
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { categoryGetAsync } from "../../../Redux/category/async";
import { createProductAsync } from "../../../Redux/product/async";
import { ProductSchema } from "../../../schemas/product-shema";
import { useAppDispatch, useAppSelector } from "../../../store/store";
function ProductCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm<ProductSchema>({
    resolver: zodResolver(ProductSchema),
  });

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product);
  const category = useAppSelector((state) => state.category);

  const isInitialMount = useRef(true);

  const onSubmit = async (data: ProductSchema) => {
    
    const formData = new FormData();

    formData.append("nameProduct", data.nameProduct);
    formData.append("desc", data.desc);
    formData.append("price", data.price.toString());
    formData.append("categoryId", data.categoryId.toString());
    formData.append("stock", data.stock.toString());

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    console.log("data", formData);

    await dispatch(createProductAsync(formData));

    if (product.entities) {
      console.log("Product created successfully");
      onClose();
    } else {
      console.log("Failed to create product");
    }
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [selectedValues,setSelectedValues] = useState<any>("");

  useEffect(() => {
    const saveValue = localStorage.getItem("selectedOption");
    if (saveValue) {
      setSelectedValues(saveValue);
    } else {
      setSelectedValues(category.entities[0]?.id);
    }
  }, [category.entities]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const res = dispatch(categoryGetAsync());
      console.log(res);
    }
  }, [dispatch]);


  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Create
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bgColor={"#212121"} maxW={"50vw"}>
          <ModalHeader>Create Product</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
          >
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name Product</FormLabel>
                <Input
                  {...register("nameProduct")}
                  placeholder="Name Product"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea {...register("desc")} placeholder="Description" />
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select option"
                  bg={"white"}
                  color={"black"}
                  {...register("categoryId", { valueAsNumber: true })}
                  defaultValue={category.entities[0]?.id}
                >
                  {category.entities.map((entity) => (
                    <option key={entity.id} value={entity.id}>
                      {entity.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input
                  {...register("price", { valueAsNumber: true })}
                  placeholder="Price"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>stock</FormLabel>
                <Input
                  {...register("stock", { valueAsNumber: true })}
                  placeholder="Name Category"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input type="file"  {...register("image")} border={"none"} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductCreate;
