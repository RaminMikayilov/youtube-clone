import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useYoutubeContext from "../hooks/useYoutubeContext";
import Videos from "../components/Videos";

const search = () => {
  const { searchQuery } = useParams();
  const { fetchData } = useYoutubeContext();
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchData(
      `search?q=${searchQuery}&part=snippet%2Cid&maxResults=50`
    ).then((data) => setvideos(data.items));
  }, [searchQuery]);

  console.log(videos);

  return <div className="py-3">
    <Videos videos={videos} />
  </div>;
};

export default search;
