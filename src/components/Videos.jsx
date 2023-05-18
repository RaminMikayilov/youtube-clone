import React from "react";

// context
import useYoutubeContext from "../hooks/useYoutubeContext";

const Videos = () => {
  const { activeCategory } = useYoutubeContext();

  return <div>{activeCategory}Videos</div>;
};

export default Videos;
