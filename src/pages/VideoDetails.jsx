import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
// context
import useYoutubeContext from "../hooks/useYoutubeContext";
// components
import Videos from "../components/Videos";
// icons
import { FaCheckCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { HiScissors } from "react-icons/hi";

const VideoDetails = () => {
  const { videoId } = useParams();
  const { fetchData } = useYoutubeContext();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchData(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchData(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => setVideos(data.items));
  }, [videoId]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle, description, publishedAt, tags },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
      <div className="px-0 md:px-10 lg:px-14 sticky top-0 z-10 md:static md:z-0">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          className="react-player"
          controls
        />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-3 w-full text-white">
        <h1 className="md:font-bold font-semibold md:text-xl text-lg py-4 md:py-5">
          {title}
        </h1>
        <div className="flex items-center justify-between text-gray-300">
          <div className="font-bold flex items-center gap-1 md:gap-2 duration-300 hover:text-gray-100 text-md md:text-lg">
            {channelTitle} <FaCheckCircle color="#ADD8E6" />
          </div>
          <div className="flex items-center justify-evenly sm:w-1/3 md:w-1/2">
            <button className="flex items-center gap-1 bg-cGray px-3 py-2 rounded-full">
              <AiFillLike color="#ADD8E6" />
              {parseInt(likeCount).toLocaleString()}
            </button>
            <button className="hidden md:flex items-center gap-1 bg-cGray px-3 py-2 rounded-full">
              <FaShare color="#ADD8E6" />
              Share
            </button>
            <button className="hidden sm:flex items-center gap-1 bg-cGray px-3 py-2 rounded-full">
              <HiScissors color="#ADD8E6" />
              Clip
            </button>
          </div>
        </div>

        {/* description */}
        <div className="bg-cGray py-3 md:py-4 px-4 md:px-5 rounded-md mt-5 md:text-[16px] text-[14px]">
          <p>
            {parseInt(viewCount).toLocaleString()} views •{" "}
            {publishedAt.slice(0, 10)}
          </p>
          <p className="py-3">
            {description.length > 700
              ? description.slice(0, 700) + "..."
              : description}
          </p>
          <p>
            {tags?.map((tag, index) => (
              <a href="#" key={index} className="text-blue-500">
                #{tag} &nbsp;
              </a>
            ))}
          </p>
        </div>

        <div className="w-full py-10 md:py-14">
          <Videos videos={videos} />
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
