import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideosLoader = () => {
  return (
    <div className="p-3 flex flex-wrap items-center justify-around gap-y-1 sm:gap-y-3 md:gap-y-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-[300px] md:w-[320px] h-[300px] md:h-[320px]"
        >
          <Skeleton className="w-full h-[170px] md:h-[210px] !rounded-xl" />
          <div className="p-1">
            <Skeleton className="!w-3/4 h-6 mt-2" />
            <Skeleton className="!w-1/2 h-4 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosLoader;
