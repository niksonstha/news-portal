import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import NewsScreen from "./screens/NewsScreen";
import ArticleDetailsPage from "./components/ArticleDetailsPage";

function App() {
  return (
    <Box display={"flex"}>
      <Box
        height={"100vh"}
        position={"sticky"}
        bgColor={"#DED0B6"}
        width={"20%"}
      >
        <Navbar />
      </Box>

      <Box width={"80%"} overflowY={"auto"} height={"100vh"}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/news" element={<NewsScreen />} />
          <Route path="/article/:title" element={<ArticleDetailsPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
