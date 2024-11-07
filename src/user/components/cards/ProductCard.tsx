import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Text
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import add from "../../../assets/add.svg";
import { ButtonLink } from "../../../ui/Button";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getAllProductAsync } from "../../../Redux/product/async";
import { useEffect } from "react";

function ProductCard() {
  
  const { id } = useParams();

  const dispatch  = useAppDispatch();
  const product =  useAppSelector((state) => state.product.entities);
  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);

  return (
    <>
      {product.map((data) => (
        <Card rounded={"5px"} bgColor={"#212121"} w={"500px"} size={"md"}>
          <CardBody>
            <ButtonLink to={`/product-detail/${data.id}`}>
              <Box display={"flex"} justifyContent={"center"}>
                <Image
                  src={data.image && data.image.length > 0
                  ? data.image[0].url
                  : ""}
                  alt={id}
                  objectFit={"cover"}
                  h={"40vh"}
                  w={"auto"}
                />
              </Box>
            </ButtonLink>
            <Box
              display={"flex"}
              fontWeight={"medium"}
              color={"white"}
              flexDir={"column"}
            >
              <Text>{data.nameProduct}</Text>
              <Text>{data.price}</Text>
              <Text>{data.stock}</Text>
              <ButtonGroup
                display={"flex"}
                flexDir={"row"}
                justifyContent={"end"}
              >
                <Button colorScheme="green">
                  <Image src={add} />
                </Button>
              </ButtonGroup>
            </Box>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default ProductCard;
