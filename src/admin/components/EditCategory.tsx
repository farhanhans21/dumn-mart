import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  editCategoriesAsync,
} from "../../Redux/category/async";
import { CategorySchema } from "../../schemas/category-schema";
import { useAppDispatch, useAppSelector } from "../../store/store";
function EditCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const category = useAppSelector((state) =>
    state.category.entities.find((c) => c.id === +id!)
  );
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<CategorySchema>({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit = async (data: CategorySchema) => {
    await dispatch(editCategoriesAsync({ id: +id!, name: data })).unwrap();
    navigate("/admin");
  };
  

  return (
    <>
      <Container mt={15} maxW={"70vw"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={"15vh"} align={"stretch"}>
            <Heading>Edit categori</Heading>
            <FormControl>
              <Input
                border={"none"}
                {...register("name")}
                defaultValue={category?.name || ""}
                bgColor={"#212121"}
              />
            </FormControl>
            <Button 
             bgColor={"#54d44c"}>
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
}
export default EditCategory;
