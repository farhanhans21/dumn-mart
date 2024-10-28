import {
  Button,
  ButtonGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { ButtonLink } from "../../../ui/Button";

function TableCategory() {
  const data = [
    {
      id: 1,
      nama: "perkakas rumah tangga",
    },
    {
      id: 2,
      nama: "perkakas rumah tangga",
    },
    {
      id: 3,
      nama: "perkakas rumah tangga",
    },
    {
      id: 4,
      nama: "perkakas rumah tangga",
    },
  ];
  return (
    <>
      <TableContainer>
        <Table variant="striped" bgColor={"#212121"} colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Nomor</Th>
              <Th>Category Name</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((data) => (
              <Tr>
                <Td>{data.id}</Td>
                <Td>{data.nama}</Td>
                <Td>
                  <ButtonGroup spacing={4}>
                    <ButtonLink
                      display={"flex"}
                      fontWeight={"medium"}
                      rounded={"10px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      to={"/edit-category"}
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

export default TableCategory;
