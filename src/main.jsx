import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme.js";
import { BrowserRouter } from "react-router-dom";
import ArticleContextProvider from "./context/ArticleContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <ArticleContextProvider>
        <App />
      </ArticleContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
