import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useYoutubeContext from "../hooks/useYoutubeContext";
import Videos from "../components/Videos";

const ChannelDetails = () => {
  const { channelId } = useParams();
  const { fetchData, convertNumber } = useYoutubeContext();
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchData(
      `search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => {
      setVideos(data.items);
    });
  }, [channelId]);

  // const {
  //   brandingSettings: { image },
  //   snippet: { title, customUrl, thumbnails },
  //   statistics: { subscriberCount, videoCount },
  // } = channelDetail;

  return (
    <div className="text-white">
      {channelDetail?.brandingSettings?.image?.bannerExternalUrl && (
        <img
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt={channelDetail?.snippet?.title}
          className="w-full h-[130px] sm:h-[160px] md:-[190px] lg:h-[220px] xl:h-[250px] object-cover"
        />
      )}

      <div className="flex flex-col md:flex-row items-center py-3 px-2 sm:px-6 md:px-12 lg:px-20">
        <img
          src={channelDetail?.snippet?.thumbnails?.default?.url}
          alt={channelDetail?.snippet?.title}
          className="rounded-full p-3 h-[100px] md:h-[128px]"
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-xl md:text-2xl py-2 md:py-1">
            {channelDetail?.snippet?.title}
          </h1>

          <div className="flex text-gray-300 space-x-4">
            <p>{channelDetail?.snippet?.customUrl}</p>
            <p>
              {convertNumber(
                parseInt(channelDetail?.statistics?.subscriberCount)
              )} subscribers
            </p>
            <p>{convertNumber(channelDetail?.statistics?.videoCount)} videos</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <Videos videos={videos} />
    </div>
  );
};

export default ChannelDetails;
