import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ShortInfo from "../components/ShortInfo";
import Services from "../components/Services";
const HomeScreen = () => {
  return (
    <Box width={"90%"} mr={"auto"} ml={"auto"}>
      <Banner />
      <ShortInfo />
      <Services />
    </Box>
  );
};

export default HomeScreen;
