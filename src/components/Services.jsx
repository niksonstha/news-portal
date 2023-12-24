import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
const Services = () => {
  return (
    <Box
      height={"max-content"}
      bgColor={"#FAEED1"}
      padding={4}
      rounded={4}
      mt={10}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading size="md">Services</Heading>
      <SimpleGrid columns={[2, null, 3]} spacing="40px" mt={10}>
        <Box bg="#FDF7E4" height="150px" padding={2}>
          <Heading as={"h3"} size={"sm"}>
            Subscription Options
          </Heading>
          <Text textAlign={"justify"}>
            If the news portal offers subscription-based access, this section
            might detail the different subscription tiers or plans available,
            their features, and pricing.
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="150px" padding={2}>
          <Heading as={"h3"} size={"sm"}>
            Customized Alerts or Notifications
          </Heading>
          <Text textAlign={"justify"}>
            Provide users with the ability to set up customized alerts for
            specific news categories, keywords, or events they are interested
            in.
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="150px" padding={2}>
          <Heading as={"h3"} size={"sm"}>
            Premium Content Access
          </Heading>
          <Text textAlign={"justify"}>
            Highlight exclusive or premium content available to subscribers or
            members.
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="150px" padding={2}>
          <Heading as={"h3"} size={"sm"}>
            Interactive Features
          </Heading>
          <Text textAlign={"justify"}>
            Offer interactive elements such as polls, quizzes, or forums related
            to news topics, allowing user engagement.
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="150px" padding={2}>
          <Heading as={"h3"} size={"sm"}>
            Ad-Free Experience
          </Heading>
          <Text textAlign={"justify"}>
            If applicable, mention any ad-free options available for
            subscribers.
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="150px" padding={2}>
          <Heading as={"h3"} size={"sm"}>
            Customer Support
          </Heading>
          <Text textAlign={"justify"}>
            Information on how users can reach customer support for queries or
            issues related to the news portals services.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Services;
