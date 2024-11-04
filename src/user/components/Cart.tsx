import {
  Box,
  Image,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useState } from "react";
import add from "../../assets/add.svg";
import minus from "../../assets/minus.svg";

function Cart() {
  const [count, setCount] = useState<number>(0);
  const increment = () =>{
    setCount(count + 1);
  } 
  const decrement = () =>{
    if(count > 0){
      setCount(count - 1);
    }
  }
  return (
    <>
      <TableContainer mx={9}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr> 
              <Td>
              <Box
                  display={"flex"}
                  flexDir={"row"}
                  alignItems={"center"}
                  w={"5vw"}
                >
                  <Img
                    src="https://thumbs.dreamstime.com/b/food-photography-epic-cheeseburger-flying-ingredients-splashing-dripping-sauce-dark-background-advertising-313260265.jpg"
                    boxSize={"50px"}
                    objectFit={"cover"}
                    mr={3}
                  />
                  <Text color={"white"}>Burger</Text>
                </Box>
              </Td>
              <Td>100.000,00</Td>
              <Td>
                <Box display={"flex"} w={'30px'} justifyContent={"space-around"}>
                  <Image src={minus} onClick={decrement} w={"20px"} h={"20px"} bg={"gray.500"} borderRadius="50%" cursor="pointer" bgColor={"white"}  />
                  <Box ml={2}>{count}</Box>
                  <Image ml={2} src={add} onClick={increment} w={"20px"} h={"20px"} bg={"gray.500"} borderRadius="50%" cursor="pointer"bgColor={"white"} />
                </Box>
              </Td>
              <Td>7.000.000</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Cart;
