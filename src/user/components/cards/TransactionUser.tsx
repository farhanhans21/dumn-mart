import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../../../assets/Frame.svg";
import garbage from "../../../assets/garbage.svg";

function TransactionUser() {
  const trans = [
    {
      id: 1,
      product: "Burger",
      price: "Rp.10.000",
      date: "2024-10-10 Oktober",
      quantity: 2,
      img: "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      total: 20000,
      status: "pending",
    },
    {
      id: 1,
      product: "Burger",
      price: "Rp.10.000",
      date: "2024-10-10 Oktober",
      quantity: 2,
      img: "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      total: 20000,
      status: "pending",
    },
    {
      id: 1,
      product: "Burger",
      price: "Rp.10.000",
      date: "2024-10-10 Oktober",
      quantity: 2,
      img: "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      total: 20000,
      status: "pending",
    },
    {
      id: 1,
      product: "Burger",
      price: "Rp.10.000",
      date: "2024-10-10 Oktober",
      quantity: 2,
      img: "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      total: 20000,
      status: "pending",
    },
    {
      id: 1,
      product: "Burger",
      price: "Rp.10.000",
      date: "2024-10-10 Oktober",
      quantity: 2,
      img: "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      total: 20000,
      status: "pending",
    },
    {
      id: 1,
      product: "Burger",
      price: "Rp.10.000",
      date: "2024-10-10 Oktober",
      quantity: 2,
      img: "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      total: 20000,
      status: "pending",
    },
  ];
  return (
    <>
      {trans.map((trans) => (
        <Card bgColor={"#212121"} rounded={"15px"} mt={"30px"} >
          <CardBody display={"flex"} flexDir={"row"} >
            <Image
              src={trans.img}
              alt="gambar"
              boxSize={'10vw'}
              rounded={"20px"}
              h={"20vh"}
            />
            <Box
              ml={4}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-around"}
            >
              <Box display={"flex"} justifyContent={"flex-start"}>
                <VStack spacing={3} align={"stretch"}>
                  <Text fontSize={"2xl"} fontWeight={"bold"} color={"red"}>
                    {trans.product}
                  </Text>
                  <Text fontSize={"xl"} fontWeight={"semibold"} color={"red"}>
                    {trans.date}
                  </Text>
                </VStack>
              </Box>
              <Text fontSize={"md"} fontWeight={"extrabold"} color={"white"}>
                {trans.price}
              </Text>
            </Box>
            <Box
              display={"flex"}
              marginLeft={"12vw"}
              borderColor={"transparent"}
            >
              <ButtonGroup>
                <Button w={"3vw"}>
                  <Image src={logo} />
                </Button>
                <Button w={"3vw"} bgColor={"red"}>
                  <Image src={garbage} w={"2vw"} />
                </Button>
              </ButtonGroup>
            </Box>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default TransactionUser;
