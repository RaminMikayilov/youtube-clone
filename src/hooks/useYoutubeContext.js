import React, { useContext } from "react";
import { YoutubeContext } from "../contexts/YoutubeContext";

const useYoutubeContext = () => {
  return useContext(YoutubeContext);
};

export default useYoutubeContext;
