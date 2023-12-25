import { Box, Heading, Text, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useArticle } from "../context/context";

const ArticleDetailsPage = () => {
  const { title } = useParams();
  const { articles } = useArticle();
  const [articleDetail, setArticleDetail] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(articleDetail);
  useEffect(() => {
    const fetchArticleByTitle = () => {
      // Assuming articles is an array containing your articles
      const matchedArticle = articles?.find(
        (article) => article.title === title
      );

      if (matchedArticle) {
        setArticleDetail(matchedArticle);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchArticleByTitle();
  }, [title, articles]);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box
      height={"max-content"}
      width={"70%"}
      marginLeft={"auto"}
      marginRight={"auto"}
      bgColor={"#FAEED1"}
      padding={4}
      rounded={4}
      mt={10}
      mb={10}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {articleDetail ? (
        <>
          <Heading>{articleDetail?.title}</Heading>
          <Text>{articleDetail?.content}</Text>
          <Image src={articleDetail?.image} width="full" />
          <Text>publishedAt: {articleDetail?.publishedAt}</Text>
          <Text>source</Text>
          <Text>name: {articleDetail?.source.name}</Text>
          <Link to={articleDetail?.url} target="_blank">
            <Text color={"blue"}>Go Through Article link</Text>
          </Link>
        </>
      ) : (
        <Heading>No details found for this article.</Heading>
      )}
    </Box>
  );
};

export default ArticleDetailsPage;
