import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const config = {
  url: BASE_URL,
  params: {
    maxResults: "50",
    part: "id,snippet",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, config);

  return response;
};
