import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ShortInfo from "../components/ShortInfo";
const HomeScreen = () => {
  return (
    <Box width={"90%"} mr={"auto"} ml={"auto"}>
      <Banner />
      <ShortInfo />
    </Box>
  );
};

export default HomeScreen;
