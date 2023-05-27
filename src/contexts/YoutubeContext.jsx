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

  const value = { activeCategory, setActiveCategory, fetchData };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export { YoutubeContextProvider };
