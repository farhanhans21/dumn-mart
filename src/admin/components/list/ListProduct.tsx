import { Container } from '@chakra-ui/react'
import TableProduct from '../table/TableProduct'

function ListProduct() {
  return (
    <>
   <Container mt={15} maxW={'70vw'}>
    <TableProduct/> 
   </Container>
   </>
  )
}

export default ListProduct