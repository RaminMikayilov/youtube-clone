import React, { createContext, useState } from "react";

export const YoutubeContext = createContext();

const YoutubeContextProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("New");

  const value = { activeCategory, setActiveCategory };

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export { YoutubeContextProvider };
