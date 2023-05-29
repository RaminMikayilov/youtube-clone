import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Videos from "./Videos";
import useYoutubeContext from "../hooks/useYoutubeContext";

const Body = () => {
  const { activeCategory, fetchData } = useYoutubeContext();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    setVideos([]);
    fetchData(`search?part=snippet&q=${activeCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [activeCategory]);

  return (
    <div className="flex flex-col md:flex-row p-2 md:p-3 min-h-screen">
      <Categories />
      <div className="w-full md:w-4/5">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Body;
