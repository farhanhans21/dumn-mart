import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import garbage from "../../../assets/garbage.svg"
import add from "../../../assets/add.svg"
import { useParams } from "react-router-dom";
import { ButtonLink } from "../../../ui/Button";

function ProductCard() {
  const product = [
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "Rp.100.000",
      stock: "Stock: 500",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/07/16063756/Pempek-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rp.200.000",
      stock: "Stock: 500",
      image:
        "https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg",
    }
  ];

  const { id } = useParams();
  return (
    <>
      {product.map((data) => (
         
         <Card rounded={"5px"} bgColor={"#212121"} w={"500px"} size={"md"}>
            
            <CardBody>
            <ButtonLink to={"/product-detail"}>
            <Box display={"flex"} justifyContent={"center"}>
              <Image
              
                src={data.image}
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
                <Text>{data.name}</Text>
                <Text>{data.price}</Text>
                <Text>{data.stock}</Text>
                <ButtonGroup display={"flex"} flexDir={"row"} justifyContent={'end'}>
                <Button colorScheme='red'><Image src={garbage}/></Button>
                <Button colorScheme='green'><Image src={add}/></Button>
                </ButtonGroup>
              
              </Box>
              
            </CardBody>
          </Card>
        
      ))}
    </>
  );
}

export default ProductCard;
