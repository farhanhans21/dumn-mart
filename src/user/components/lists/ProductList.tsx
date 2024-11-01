import { HStack } from "@chakra-ui/react";
import ProductCard from "../cards/ProductCard";

function ProductList() {
  return (
    <HStack align={"start"} display={"flex"} flexWrap={"wrap"}  spacing={3}>
      <ProductCard />
    </HStack>
  );
}

export default ProductList;
