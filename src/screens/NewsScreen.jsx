import { Box, Heading, SimpleGrid, Button, Spinner } from "@chakra-ui/react";
import { getApiData } from "../api/api";
import { useEffect, useState } from "react";
import ArticlesCard from "../components/ArticlesCard";

const NewsScreen = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4); // Number of articles per page
  const [loading, setLoading] = useState(true); // Loading state

  const getData = async () => {
    const data = await getApiData("technology");
    setArticles(data.data.articles);
    setLoading(false); // Set loading to false after data is fetched
  };

  useEffect(() => {
    getData();
  }, []);

  // Logic to get current articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box width={"90%"} mr={"auto"} ml={"auto"}>
      <Heading mt={5} textAlign={"center"}>
        {`Today's News`}
      </Heading>
      {loading ? (
        // Show Spinner while loading
        <Box textAlign="center" mt={10}>
          <Spinner size="xl" />
        </Box>
      ) : (
        <>
          <SimpleGrid columns={2} spacing={5} mt={10}>
            {currentArticles.map((article, index) => (
              <Box key={index} p="6" bg="#FAEED1" rounded="lg" shadow="md">
                <ArticlesCard
                  title={article.title}
                  description={article.description}
                  image={article.image}
                />
              </Box>
            ))}
          </SimpleGrid>
          {/* Pagination Controls */}
          <Box display="flex" justifyContent="center" mt={5} mb={10}>
            {Array.from(
              { length: Math.ceil(articles.length / articlesPerPage) },
              (_, i) => (
                <Button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  mx={1}
                  variant="outline"
                >
                  {i + 1}
                </Button>
              )
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default NewsScreen;
