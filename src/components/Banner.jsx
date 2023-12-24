import { Box, Heading, Text } from "@chakra-ui/react";
const Banner = () => {
  return (
    <Box
      height={"50vh"}
      bgColor={"#FAEED1"}
      padding={4}
      width={"90%"}
      mr={"auto"}
      ml={"auto"}
      rounded={4}
      mt={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading textAlign={"center"} letterSpacing={3}>
        Welcome to News Portal
      </Heading>
      <Text>{`"Explore the latest news and updates here."`}</Text>
    </Box>
  );
};

export default Banner;
