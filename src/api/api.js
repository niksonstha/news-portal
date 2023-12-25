import axios from "axios";

const URL = `https://gnews.io/api/v4/top-headlines`;
const API_KEY = import.meta.env.VITE_KEY;
export const getApiData = async (category) => {
  try {
    const response = await axios.get(
      `${URL}?category=${category}&lang=en&apikey=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
