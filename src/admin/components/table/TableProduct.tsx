import {
  Button,
  ButtonGroup,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { ButtonLink } from "../../../ui/Button";

function TableProduct() {
  const data = [
    {
      id: 0,
      photo:
        "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      productName: "Product 1",
      productDesc: "Product Description 1",
      price: 10000,
      quantity: 10,
    },
    {
      id: 1,
      photo:
        "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      productName: "Product 1",
      productDesc: "Product Description 1",
      price: 10000,
      quantity: 10,
    },
    {
      id: 2,
      photo:
        "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      productName: "Product 1",
      productDesc: "Product Description 1",
      price: 10000,
      quantity: 10,
    },
    {
      id: 3,
      photo:
        "https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg",
      productName: "Product 1",
      productDesc: "Product Description 1",
      price: 10000,
      quantity: 10,
    },
  ];

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr color={"white"}>
              <Th color={"white"}fontWeight={'semibold'}>No</Th>
              <Th color={"white"} fontWeight={'semibold'}>Photo</Th>
              <Th color={"white"} fontWeight={'semibold'}>Product Name</Th>
              <Th color={"white"} fontWeight={'semibold'}>Product Desc</Th>
              <Th color={"white"} fontWeight={'semibold'}>Price</Th>
              <Th color={"white"} fontWeight={'semibold'}>Quantity</Th>
              <Th color={"white"} fontWeight={'semibold'}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((r) => (
              <Tr>
                <Td>{r.id}</Td>
                <Td><Image objectFit={'cover'} src={r.photo} w={'60px'} h={'80px'}/></Td>
                <Td>{r.productName}</Td>
                <Td>{r.productDesc}</Td>
                <Td>{r.price}</Td>
                <Td>{r.quantity}</Td>
                <Td>
                  <ButtonGroup spacing={4}>
                    <ButtonLink
                      display={"flex"}
                      fontWeight={"medium"}
                      rounded={"10px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      to={"/edit-product"}
                      h={"40px"}
                      w={"75px"}
                      bgColor={"#54d44c"}
                    >
                      Edit
                    </ButtonLink>
                    <Button colorScheme="red">Hapus</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableProduct;
