/* eslint-disable react/prop-types */
import { useState } from "react";
import ArticleContext from "./context";

const ArticleContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
