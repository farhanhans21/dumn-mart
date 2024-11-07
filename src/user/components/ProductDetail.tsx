import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getProductByIdAsync } from "../../Redux/product/async";
import { useEffect } from "react";

function ProductDetail() {
  const { id } = useParams(); // get product id from route parameter
  const dispatch = useAppDispatch();
  const product = useAppSelector((state)=> state.product.entities.find(p=> p.id === +id!))
  useEffect(() => {
  dispatch(getProductByIdAsync(+id!)).unwrap(); // fetch product by id when component mounts
  }, [dispatch]);

  return (
    <>
      <Box
        display={"flex"}
        key={id}
        ml={'10vw'}
      >
        <Box display={"flex"} maxW={"30%"} w={"auto"} bgColor={"blue"} >
          <Image
            objectFit={"cover"}   
            src={product?.image && product?.image.length > 0
              ? product?.image[0].url
              : ""}
          />
        </Box>
        <Box display={"flex"} ml={3} maxW={"70%"} w={"100%"}>
          <VStack spacing={4} align={"stretch"}>
            <Box>
              <Heading color={"red"}>{product?.nameProduct}</Heading>
              <Text mt={2}>Stock : {product?.stock}</Text>
            </Box>
            <Box>
              <Text>- wireless mouse</Text>
              <Text>- 400mAh battery</Text>
              <Text>- 1200mAh battery</Text>
              <Text>- 10-hour battery life</Text>
              <Text>- 30W charger</Text>
              <Text>- 10000mAh battery life</Text>
            </Box>
            <Text>
              {product?.desc}
            </Text>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Heading  color={"red"}>
               Rp.{product?.price}
              </Heading>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              w={"60vw"}
            >
              <Button mt={"5vh"} bgColor={"#F74D4D"} w={"100%"}>
                Cart
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
