import { Avatar, Box, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react";

function ComplainCard() {
  const komplen=[{
    id:1,
    nama:'farhan',
    img:'https://bit.ly/prosper-baba',
    bio: 'anak ganteng bana'
  },
  {
    id:2,
    nama:'diaz',
    img:'',
    bio: 'anak ganteng bana'
  },
  {
    id:3,
    nama:'malik',
    img:'https://bit.ly/tioluwani-kolawole',
    bio: 'anak ganteng bana'
  },
  {
    id:4,
    nama:'kritod',
    img:'https://bit.ly/kent-c-dodds',
    bio: 'anak ganteng bana'
  }
];

return (
    <>
    {komplen.map((hans)=>(
      <Card rounded={"5px"} bgColor={"black"} w={"500px"} size={"md"} mt={3}>
        <CardBody>
          <HStack>
            <Avatar name="Dan Abrahmov" src={hans.img}/>
            <Box display={"flex"} alignItems={'start'} ml={2}>
              <VStack spacing={2}>
              <Text fontWeight={"semibold"} color={"white"} >{hans.nama}</Text>
              <Text fontWeight={"light"} color={"white"}>{hans.bio}</Text>
              </VStack>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    ))}
    </>
  );
}

export default ComplainCard


