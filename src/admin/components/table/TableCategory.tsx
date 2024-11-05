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
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { categoryGetAsync, deleteCategoryAsync } from "../../../Redux/category/async";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TableCategory() {
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const category = useAppSelector((state) => state.category)  
  
  const [number, setNumber] = useState<number>(0)
  


  const onDelete = async (): Promise<void> => {
    for (const categoryElement of category.entities) {
      try {
        // Dispatch action untuk menghapus kategori
        await dispatch(deleteCategoryAsync(categoryElement.id)).unwrap();
        // Tampilkan pesan sukses
        Swal.fire("Deleted!", "Your category has been deleted.", "success");
        // Arahkan pengguna ke halaman admin setelah berhasil menghapus
        navigate('/admin');
      } catch (error) {
        Swal.fire("Error!", "Failed to delete category. Please try again.", "error");
      }
    }
  };

  // Fungsi untuk menampilkan konfirmasi dengan SweetAlert
  const confirmDelete = (): void => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "chakra-button chakra-button--solid chakra-button--green",
        cancelButton: "chakra-button chakra-button--solid chakra-button--red"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi, jalankan onDelete
        onDelete();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Jika pengguna membatalkan, tampilkan pesan batal
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your category is safe :)",
          icon: "error"
        });
      }
    });
  }


  useEffect(() => {
    
    dispatch(categoryGetAsync())
  }, [dispatch])
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
            {category.entities.map((data, index) => (
              <Tr>
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
                    <Button onClick={confirmDelete} colorScheme="red">Hapus</Button>
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
