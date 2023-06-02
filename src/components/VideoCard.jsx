import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, thumbnails, channelTitle },
  } = video;

  return (
    <div className="w-[300px] md:w-[320px] h-[300px] md:h-[320px]">
      <Link to={`/video/${videoId}`}>
        <img
          className="rounded-xl hover:rounded-none w-full h-[170px] md:h-[210px] object-cover hover:opacity-80 duration-300 cursor-pointer"
          src={thumbnails.medium.url}
          alt={title}
        />
      </Link>
      <div className="p-1">
        <h2 className="text-md mt-2">
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </h2>

        {/* channel */}
        <Link to="/">
          <p className="text-sm text-gray-400 py-2 hover:text-gray-100 duration-300 font-semibold">
            {channelTitle.length > 30
              ? channelTitle.slice(0, 30) + "..."
              : channelTitle}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
