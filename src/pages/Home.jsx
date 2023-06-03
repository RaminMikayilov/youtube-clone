import React, { useEffect, useState } from "react";
import useYoutubeContext from "../hooks/useYoutubeContext";
// components
import Categories from "../components/Categories";
import Videos from "../components/Videos";
import VideosLoader from "../components/VideosLoader";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <div className="flex flex-col md:flex-row p-2 md:p-3 min-h-screen">
        <Helmet>
          <title>Youtube</title>
        </Helmet>
        <Categories />
        <div className="w-full md:w-4/5">
          {loading ? <VideosLoader /> : <Videos videos={videos} />}{" "}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
