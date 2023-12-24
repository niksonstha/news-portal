import { Box, Heading, Text } from "@chakra-ui/react";
const ShortInfo = () => {
  return (
    <Box
      height={"50vh"}
      bgColor={"#FAEED1"}
      padding={4}
      rounded={4}
      mt={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading as="h2" size="md">
        What is this?
      </Heading>
      <Text mt={4}>
        A news portal is an online destination that offers a comprehensive
        collection of news articles, reports, and multimedia content from
        diverse sources such as newspapers, journalists, blogs, and news
        agencies. It serves as a central hub for users to access the latest
        information across different categories such as world news, politics,
        technology, business, entertainment, sports, and more. These portals
        often provide a user-friendly interface, allowing individuals to stay
        informed about current events, explore in-depth stories, and sometimes
        engage through comments or social sharing features.
      </Text>
    </Box>
  );
};

export default ShortInfo;
