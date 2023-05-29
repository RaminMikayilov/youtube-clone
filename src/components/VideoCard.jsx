import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="w-[300px] md:w-[320px] h-[300px] md:h-[320px]">
      <Link to={`/video/${video.id.videoId}`}>
        <img
          className="rounded-xl hover:rounded-none w-full h-[170px] md:h-[210px] object-cover hover:opacity-80 duration-300 cursor-pointer"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </Link>
      <div className="p-1">
        <h2 className="text-md mt-2">
          {video.snippet.title.length > 30
            ? video.snippet.title.slice(0, 30) + "..."
            : video.snippet.title}
        </h2>

        <p className="text-sm text-gray-400 py-2 hover:text-gray-100 duration-300 font-semibold">
          {video.snippet.channelTitle.length > 30
            ? video.snippet.channelTitle.slice(0, 30) + "..."
            : video.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
