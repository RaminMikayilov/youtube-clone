import React, { createContext } from "react";

export const YoutubeContext = createContext();

const YoutubeContextProvider = ({ children }) => {
  const value = {};

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};
