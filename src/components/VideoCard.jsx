import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, thumbnails, channelTitle },
  } = video;

  return (
    <div className="w-[300px] md:w-[320px] h-[300px] md:h-[320px] hover:opacity-80 duration-300 cursor-pointer">
      <Link to={`/video/${videoId}`}>
        <img
          className="rounded-xl hover:rounded-none w-full h-[170px] md:h-[210px] object-cover duration-300"
          src={thumbnails.medium.url}
          alt={title}
        />

        <div className="p-1">
          <h2 className="text-md mt-2">
            {title.length > 70 ? title.slice(0, 70) + "..." : title}
          </h2>

          {/* channel */}

          <p className="text-sm text-gray-400 py-2 font-semibold">
            {channelTitle.length > 30
              ? channelTitle.slice(0, 30) + "..."
              : channelTitle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
