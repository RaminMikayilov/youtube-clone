import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="p-3 text-white w-full md:w-4/5 flex flex-wrap items-center justify-around gap-y-10">
      {videos?.map((video,i) => (
        <VideoCard key={i} video={video} />
      ))}
    </div>
  );
};

export default Videos;
