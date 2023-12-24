import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ShortInfo from "../components/ShortInfo";
import Services from "../components/Services";
import Contact_Location from "../components/Contact_Location";
const HomeScreen = () => {
  return (
    <Box width={"90%"} mr={"auto"} ml={"auto"}>
      <Banner />
      <ShortInfo />
      <Services />
      <Contact_Location />
    </Box>
  );
};

export default HomeScreen;
