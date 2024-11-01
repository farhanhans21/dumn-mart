import { Container, Flex } from '@chakra-ui/react'
import TableProduct from '../table/TableProduct'
import ProductCreate from '../modal/ProductCreate'

function ListProduct() {
  return (
    <>
   <Container mt={15} maxW={'70vw'}>
    <Flex justifyContent={'end'} my={3}>
    <ProductCreate/>
    </Flex>
    <TableProduct/> 
   </Container>
   </>
  )
}

export default ListProduct