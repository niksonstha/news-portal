import { createContext, useContext } from "react";

const ArticleContext = createContext();

export const useArticle = () => {
  const article = useContext(ArticleContext);
  return article;
};

export default ArticleContext;
