import React, { useEffect, useState } from "react";
import useYoutubeContext from "../hooks/useYoutubeContext";
// components
import Categories from "../components/Categories";
import Videos from "../components/Videos";
import VideosLoader from "../components/VideosLoader";

const Home = () => {
  const { activeCategory, fetchData } = useYoutubeContext();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setVideos([]);
    setLoading(true);
    fetchData(`search?part=snippet&q=${activeCategory}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [activeCategory]);

  return (
    <div className="flex flex-col md:flex-row p-2 md:p-3 min-h-screen">
      <Categories />
      <div className="w-full md:w-4/5">
        {loading ? <VideosLoader /> : <Videos videos={videos} />}{" "}
      </div>
    </div>
  );
};

export default Home;
