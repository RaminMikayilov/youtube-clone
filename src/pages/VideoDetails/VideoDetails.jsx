import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
// context
import useYoutubeContext from "../../hooks/useYoutubeContext";
// components
import Videos from "../../components/Videos";
import VideosLoader from "../../components/VideosLoader";
// icons
import { FaCheckCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { HiScissors } from "react-icons/hi";
// skeleton
import Skeleton from "react-loading-skeleton";
// react-helmet
import { Helmet, HelmetProvider } from "react-helmet-async";
// css
import "./VideoDetails.css";

const VideoDetails = () => {
  const { videoId } = useParams();
  const { fetchData, convertNumber } = useYoutubeContext();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetchData(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchData(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [videoId]);

  // const {
  //   snippet: { title, channelId, channelTitle, description, publishedAt, tags },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${videoDetail?.snippet?.title} - YouTube`}</title>
      </Helmet>
      <div className="px-0 md:px-10 lg:px-14 sticky top-0 z-10 md:static md:z-0">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          className="react-player"
          controls
        />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-3 w-full text-white">
        <h1 className="md:font-bold font-semibold md:text-xl text-lg py-4 md:py-5">
          {videoDetail?.snippet?.title || <Skeleton className="w-3/5" />}
        </h1>
        <div className="flex items-center justify-between text-gray-300">
          <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <div className="font-bold flex items-center gap-1 md:gap-2 duration-300 hover:text-gray-100 text-md md:text-lg">
              <div className="w-full">
                {videoDetail?.snippet?.channelTitle || (
                  <Skeleton className="w-[200px]" />
                )}{" "}
              </div>
              <FaCheckCircle color="#ADD8E6" />
            </div>
          </Link>
          <div className="flex items-center sm:space-x-4 lg:space-x-6 xl:space-x-8">
            <button className="flex items-center gap-1 bg-cGray px-3 py-2 rounded-full">
              <AiFillLike color="#ADD8E6" />
              {convertNumber(parseInt(videoDetail?.statistics?.likeCount)) ||
                "123"}
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
            {convertNumber(parseInt(videoDetail?.statistics?.viewCount)) || 0}{" "}
            views • {videoDetail?.snippet?.publishedAt.slice(0, 10)}
          </p>
          <p className="py-3 whitespace-break-spaces overflow-hidden">
            {videoDetail?.snippet?.description.length > 700
              ? videoDetail?.snippet?.description.slice(0, 700) + "..."
              : videoDetail?.snippet?.description}
          </p>
          <p>
            {videoDetail?.snippet?.tags?.map((tag, index) => (
              <a href="#" key={index} className="text-blue-500">
                #{tag} &nbsp;
              </a>
            ))}
          </p>
        </div>

        <div className="w-full py-10 md:py-14">
          {loading ? <VideosLoader /> : <Videos videos={videos} />}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default VideoDetails;
