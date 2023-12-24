import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
const Contact_Location = () => {
  return (
    <Box
      height={"50vh"}
      bgColor={"#FAEED1"}
      padding={4}
      rounded={4}
      mt={10}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading size="md" mb={10}>
        Contact & Location
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="#FDF7E4" height="max-content" padding={2}>
          <Heading size={"sm"}>Headquarters Address</Heading>
          <Text>
            NewsHub Inc. <br />
            1234 Main Street,
            <br /> Suite 200 New York,
            <br /> NY 10001 <br />
            United States
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="max-content" padding={2}>
          <Heading size={"sm"}>Contact Information</Heading>
          <Text>
            Phone: +1 212-555-1234 <br />
            Fax: +1 212-555-5678 <br />
            Email: contact@newshub.com
          </Text>
        </Box>
        <Box bg="#FDF7E4" height="max-content" padding={2}>
          <Heading size={"sm"}>Operating Hours</Heading>
          <Text>Monday - Friday: 9:00 AM - 6:00 PM (Eastern Time Zone)</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contact_Location;
