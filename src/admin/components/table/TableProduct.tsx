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
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import {
  deleteProductAsync,
  getAllProductAsync,
} from "../../../Redux/product/async";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { ButtonLink } from "../../../ui/Button";

function TableProduct() {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.entities);

  const onDelete = async (id: number): Promise<void> => {
    try {
      await dispatch(deleteProductAsync(id)).unwrap();

      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    } catch (error) {
      Swal.fire(
        "Error!",
        "Failed to delete Product. Please try again.",
        "error"
      );
    }
  };

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr color={"white"}>
              <Th color={"white"} fontWeight={"semibold"}>
                No
              </Th>
              <Th color={"white"} fontWeight={"semibold"}>
                Photo
              </Th>
              <Th color={"white"} fontWeight={"semibold"}>
                Product Name
              </Th>
              <Th color={"white"} fontWeight={"semibold"}>
                Product Desc
              </Th>
              <Th color={"white"} fontWeight={"semibold"}>
                Price
              </Th>
              <Th color={"white"} fontWeight={"semibold"}>
                Stock
              </Th>
              <Th color={"white"} fontWeight={"semibold"}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {product.map((data, index) => {
              console.log("data", data);
              return (
                <Tr key={data.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Image
                      objectFit={"cover"}
                      src={
                        data.image && data.image.length > 0
                          ? data.image[0].url
                          : ""
                      }
                      w={"60px"}
                      h={"80px"}
                    />
                  </Td>
                  <Td>{data.nameProduct}</Td>
                  <Td>{data.desc}</Td>
                  <Td>{data.price}</Td>
                  <Td>{data.stock}</Td>
                  <Td>
                    <ButtonGroup spacing={4}>
                      <ButtonLink
                        display={"flex"}
                        fontWeight={"medium"}
                        rounded={"10px"}
                        _hover={{ color: "black" }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        to={`/edit-product/${data?.id}`}
                        h={"40px"}
                        w={"75px"}
                        bgColor={"#54d44c"}
                      >
                        Edit
                      </ButtonLink>
                      <Button
                        _hover={{ color: "black" }}
                        onClick={() => onDelete(data.id)}
                        colorScheme="red"
                      >
                        Hapus
                      </Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableProduct;
