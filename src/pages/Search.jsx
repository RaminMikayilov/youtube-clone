import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useYoutubeContext from "../hooks/useYoutubeContext";
import Videos from "../components/Videos";
import VideosLoader from "../components/VideosLoader";
import { Helmet, HelmetProvider } from "react-helmet-async";

const search = () => {
  const { searchQuery } = useParams();
  const { fetchData } = useYoutubeContext();
  const [videos, setvideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetchData(`search?q=${searchQuery}&part=snippet%2Cid&maxResults=50`).then(
      (data) => {
        setvideos(data.items);
        setLoading(false);
      }
    );
  }, [searchQuery]);

  return (
    <HelmetProvider>
      <div className="py-3">
        <Helmet>
          <title>{`${searchQuery} - YouTube`}</title>
        </Helmet>
        {loading ? <VideosLoader /> : <Videos videos={videos} />}
      </div>
    </HelmetProvider>
  );
};

export default search;
