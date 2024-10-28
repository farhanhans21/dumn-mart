import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";

function ProductDetail() {
  return (
    <>
      <Box
        display={"flex"}
        mt={"5vh"}
        ml={"17vw"}
        justifyContent={"space-between"}
        w={"60vw"}
        h={"60vh"}
      >
        <Box display={"flex"} maxW={"30%"} w={"100%"} bgColor={"blue"}>
          <Image
            objectFit={"cover"}
            src="https://cdn1-production-images-kly.akamaized.net/KnORI-3eEScB-XJd2t09_3O6SE8=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2536322/original/059702700_1544846845-shutterstock_743138434.jpg"
          />
        </Box>
        <Box display={"flex"} ml={3} maxW={"70%"} w={"100%"}>
          <VStack spacing={4} align={"stretch"}>
            <Box>
              <Heading color={"red"}>Sate</Heading>
              <Text mt={2}>Stock: 600</Text>
            </Box>
            <Box>
              <Text>- wireless mouse</Text>
              <Text>- 400mAh battery</Text>
              <Text>- 1200mAh battery</Text>
              <Text>- 10-hour battery life</Text>
              <Text>- 30W charger</Text>
              <Text>- 10000mAh battery life</Text>
            </Box>
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Heading  color={"red"}>
                Rp. 600.000
              </Heading>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              w={"60vw"}
            >
              <Button mt={"5vh"} bgColor={"#F74D4D"} w={"100%"}>
                Cart
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
