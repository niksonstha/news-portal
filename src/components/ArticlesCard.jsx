/* eslint-disable react/prop-types */
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const ArticlesCard = ({ title, description, image }) => {
  return (
    <Box mt={10}>
      <Box bg="tomato" height="max-content">
        <Heading>{title}</Heading>
        <Image src={image} alt={title} />
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default ArticlesCard;
