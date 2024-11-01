import { Box, Container, Flex } from '@chakra-ui/react'
import TableCategory from '../table/TableCategory'
import CreateCategory from '../modal/CreateCategory'

function ListCategory() {
  return (
    <>
    <Container maxW={'7xl'} mt={'10vh'}>
    <Box width={'100%'} h={'100%'}>
      <Flex justifyContent={'end'} mb={2}>
        <CreateCategory/>
      </Flex>
    <TableCategory/>
    </Box>
    
    </Container>
    </>
  )
}

export default ListCategory