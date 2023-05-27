import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Videos from "./Videos";
import useYoutubeContext from "../hooks/useYoutubeContext";

const Body = () => {
  const { activeCategory, fetchData } = useYoutubeContext();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);
    fetchData(`search?part=snippet&q=${activeCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [activeCategory]);

  return (
    <div className="flex flex-col md:flex-row p-2 md:p-3 min-h-screen">
      <Categories />
      <Videos videos={videos} />
    </div>
  );
};

export default Body;
