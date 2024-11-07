import {
  Button,
  ButtonGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ButtonLink } from "../../../ui/Button";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  categoryGetAsync,
  deleteCategoryAsync,
} from "../../../Redux/category/async";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../entities/productEntities";
import { ICategory } from "../../../entities/categoryEntities";

function TableCategory() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category.entities);

  const [number, setNumber] = useState<number>(0);

  const onDelete = async (id: number): Promise<void> => {
    try {
      await dispatch(deleteCategoryAsync(id)).unwrap();

      Swal.fire("Deleted!", "Your category has been deleted.", "success");

      navigate("/admin");
    } catch (error) {
      Swal.fire(
        "Error!",
        "Failed to delete category. Please try again.",
        "error"
      );
    }
  };

  // Fungsi untuk menampilkan konfirmasi dengan SweetAlert

  useEffect(() => {
    dispatch(categoryGetAsync());
  }, [dispatch]);
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
            {category.map((data, index) => (
              <Tr key={data.id}>
                <Td>{index + 1}</Td>
                <Td>{data?.name}</Td>
                <Td>
                  <ButtonGroup spacing={4}>
                    <ButtonLink
                      display={"flex"}
                      fontWeight={"medium"}
                      rounded={"10px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      to={`/edit-category/${data?.id}`}
                      h={"40px"}
                      w={"75px"}
                      bgColor={"#54d44c"}
                    >
                      Edit
                    </ButtonLink>
                    <Button onClick={()=>onDelete(data.id)} colorScheme="red">
                      Hapus
                    </Button>
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
