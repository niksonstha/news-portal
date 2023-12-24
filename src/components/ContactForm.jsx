import { Box, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box p={4} bg="#DED0B6" mt={5}>
      <form>
        <Box mb={4}>
          <Heading textAlign={"center"} mb={4} letterSpacing={3}>
            {`Let's Talk`}
          </Heading>
          <Input
            type="text"
            placeholder="Your Name"
            bg="#FAEED1"
            borderRadius="md"
            py={2}
            px={3}
            mb={2}
          />
          <Input
            type="email"
            placeholder="Your Email"
            bg="#FAEED1"
            borderRadius="md"
            py={2}
            px={3}
            mb={2}
          />
          <Textarea
            placeholder="Your Message"
            bg="#FAEED1"
            borderRadius="md"
            py={2}
            px={3}
            mb={2}
          />
        </Box>
        <Button
          type="submit"
          bg="#FAEED1"
          color="#000"
          _hover={{ bg: "green", color: "white" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
