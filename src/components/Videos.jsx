import { useEffect } from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="p-3 text-white flex flex-wrap items-center justify-around gap-y-1 sm:gap-y-3 md:gap-y-10">
      {videos?.map((video, i) => (
        <VideoCard key={i} video={video} />
      ))}
    </div>
  );
};

export default Videos;
