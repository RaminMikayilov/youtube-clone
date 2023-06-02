import axios from "axios";
import React, { createContext, useState } from "react";

export const YoutubeContext = createContext();

const YoutubeContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("New");

  const BASE_URL = "https://youtube-v31.p.rapidapi.com";

  const options = {
    params: {
      maxResults: "48",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const fetchData = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  function convertNumber(number) {
    if (number >= 1000000) {
      return number % 1000000 === 0
        ? number / 1000000 + "M"
        : (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return number % 1000 === 0
        ? number / 1000 + "K"
        : (number / 1000).toFixed(1) + "K";
    } else {
      return number;
    }
  }

  const value = { activeCategory, setActiveCategory, fetchData, convertNumber };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export { YoutubeContextProvider };
