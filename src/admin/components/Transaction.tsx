import {
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function Transaction() {
  return (
    <>
    
      <TableContainer display={"contents"} mt={2}>
        <Table variant="simple">
          <TableCaption>View Transaction</TableCaption>
          <Thead>
            <Tr>
              <Th  color={"white"}>name Product</Th>
              <Th  color={"white"}>stock</Th>
              <Th  color={"white"}>item buy</Th>
              <Th  color={"white"}>price per item</Th>
              <Th  color={"white"}>total price</Th>
              <Th  color={"white"}>status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
             */}
          </Tbody>
          
        </Table>
      </TableContainer>
    </>
  );
}

export default Transaction;
