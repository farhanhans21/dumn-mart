import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProductAsync,
  getAllProductAsync
} from "../../Redux/product/async";
import { UpdateProductSchema } from "../../schemas/product-shema";
import { useAppDispatch, useAppSelector } from "../../store/store";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product = useAppSelector((state) =>
    state.product.entities.find((c) => c.id === +id!)
  );
  const { register, handleSubmit } = useForm<UpdateProductSchema>({
    resolver: zodResolver(UpdateProductSchema),
  });
  const onSubmit = async (data: UpdateProductSchema) => {
    const formData = new FormData();

    formData.append("nameProduct", data.nameProduct);
    formData.append("desc", data.desc);
    formData.append("price", data.price.toString());
    formData.append("stock", data.stock.toString());

    // if (data.image?.length && data.image.length > 0) {
    //   formData.append("image", data.image[0])
    // }
    if (data.image && data.image?.length) {
      Array.from(data.image).forEach((image) => {
        formData.append("image", image);
      });
    }
    console.log(data.image);

    await dispatch(editProductAsync({ id: +id!, data: formData }));

    if (product) {
      console.log("Product has been edited");
    } else {
      console.log("Failed to uppdate");
    }
    dispatch(getAllProductAsync());
    navigate("/list-products");
  };

  return (
    <>
      <Container mt={5} maxW={"70vw"}>
        <Heading>Edit Product</Heading>
        <form onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
          <VStack mt={10} spacing={7} align={"stretch"}>
            <FormControl>
              <Input type="file" border={"none"} {...register("image")} />
            </FormControl>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Product name"
                color={"white"}
                border={"none"}
                {...register("nameProduct")}
                defaultValue={product?.nameProduct}
                bgColor={"#757474"}
                _placeholder={{ color: "white" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripstion</FormLabel>
              <Input
                placeholder="Description"
                color={"white"}
                {...register("desc")}
                defaultValue={product?.desc}
                border={"none"}
                bgColor={"#757474"}
                _placeholder={{ color: "white" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                color={"white"}
                {...register("price", { valueAsNumber: true })}
                defaultValue={product?.price}
                border={"none"}
                bgColor={"#757474"}
                _placeholder={{ color: "white" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Input
                placeholder="Stock"
                color={"white"}
                border={"none"}
                {...register("stock", { valueAsNumber: true })}
                defaultValue={product?.stock}
                bgColor={"#757474"}
                _placeholder={{ color: "white" }}
              />
            </FormControl>
            <Button bgColor={"#54d44c"} type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
}

export default EditProduct;
