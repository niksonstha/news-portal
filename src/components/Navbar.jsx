import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <UnorderedList
        listStyleType={"none"}
        mt={5}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
      >
        <NavLink to={"/"}>
          <ListItem
            cursor={"pointer"}
            bgColor={"#FAEED1"}
            padding={3}
            borderLeftRadius="5"
            transition={"all 0.2s ease-in"}
            _hover={{ backgroundColor: "#BBAB8C" }}
          >
            Home
          </ListItem>
        </NavLink>
        <NavLink to={"/about"}>
          <ListItem
            cursor={"pointer"}
            bgColor={"#FAEED1"}
            padding={3}
            borderLeftRadius="5"
            transition={"all 0.2s ease-in"}
            _hover={{ backgroundColor: "#BBAB8C" }}
          >
            About
          </ListItem>
        </NavLink>
        <NavLink to={"/contact"}>
          <ListItem
            cursor={"pointer"}
            bgColor={"#FAEED1"}
            padding={3}
            borderLeftRadius="5"
            transition={"all 0.2s ease-in"}
            _hover={{ backgroundColor: "#BBAB8C" }}
          >
            Contact
          </ListItem>
        </NavLink>
        <NavLink to={"/services"}>
          <ListItem
            cursor={"pointer"}
            bgColor={"#FAEED1"}
            padding={3}
            borderLeftRadius="5"
            transition={"all 0.2s ease-in"}
            _hover={{ backgroundColor: "#BBAB8C" }}
          >
            Services
          </ListItem>
        </NavLink>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
