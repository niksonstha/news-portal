import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { getApiData } from "../api/api";
import { useEffect, useState } from "react";
import ArticlesCard from "../components/ArticlesCard";

const NewsScreen = () => {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getApiData("technology");
    setArticles(data.data.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box width={"90%"} mr={"auto"} ml={"auto"}>
      <Heading mt={5} textAlign={"center"}>
        {`Today's News`}
      </Heading>
      <SimpleGrid columns={2} spacing={5} mt={10}>
        {articles.map((article, index) => (
          <Box key={index} p="6" bg="white" rounded="lg" shadow="md">
            <ArticlesCard
              title={article.title}
              description={article.description}
              image={article.image}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default NewsScreen;
