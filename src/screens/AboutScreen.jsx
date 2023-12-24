import { Box, Heading, Text } from "@chakra-ui/react";

const AboutScreen = () => {
  return (
    <Box p={4}>
      <Box mb={8}>
        <Heading as="h1" size="xl">
          About Us
        </Heading>
      </Box>
      <Box>
        <Text fontSize="lg" mb={4}>
          Welcome to NewsHub, your trusted source for the latest news and
          updates from around the globe.
        </Text>
        <Text fontSize="lg" mb={4}>
          Our mission is to provide comprehensive, unbiased, and insightful
          coverage across various categories including world news, politics,
          technology, business, entertainment, sports, and more.
        </Text>
        <Text fontSize="lg" mb={4}>
          Since our establishment in 2010, we have been dedicated to
          delivering accurate, timely, and engaging content to our readers.
        </Text>
        <Text fontSize="lg" mb={4}>
          At NewsHub, we believe in the power of information to empower
          individuals, spark conversations, and shape perspectives.
        </Text>
        <Text fontSize="lg">
          Our diverse team of experienced journalists and editors strive to
          uphold the highest standards of journalism, ensuring transparency and
          credibility in our reporting.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutScreen;
