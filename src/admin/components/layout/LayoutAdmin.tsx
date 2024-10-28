import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import NavigationAdmin from '../navigation/NavigationAdmin'

function LayoutAdmin() {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100vw"}>
    <NavigationAdmin/>
    <Outlet />
  </Box>
  )
}

export default LayoutAdmin