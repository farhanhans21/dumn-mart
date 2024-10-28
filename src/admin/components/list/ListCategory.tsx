import { Box, Container } from '@chakra-ui/react'
import TableCategory from '../table/TableCategory'

function ListCategory() {
  return (
    <>
    <Container maxW={'7xl'} mt={'10vh'}>
    <Box width={'100%'} h={'100%'}>
    <TableCategory/>
    </Box>
    
    </Container>
    </>
  )
}

export default ListCategory