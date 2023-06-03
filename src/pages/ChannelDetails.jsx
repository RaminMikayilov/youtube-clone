import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useYoutubeContext from "../hooks/useYoutubeContext";
// components
import Videos from "../components/Videos";
import VideosLoader from "../components/VideosLoader";

import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet";

const ChannelDetails = () => {
  const { channelId } = useParams();
  const { fetchData, convertNumber } = useYoutubeContext();
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchData(
      `search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [channelId]);

  // const {
  //   brandingSettings: { image },
  //   snippet: { title, customUrl, thumbnails },
  //   statistics: { subscriberCount, videoCount },
  // } = channelDetail;

  return (
    <div className="text-white">
      <Helmet> 
        <title>{channelDetail?.snippet?.title} - YouTube</title>
      </Helmet>
      {channelDetail?.brandingSettings?.image?.bannerExternalUrl && (
        <img
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt={channelDetail?.snippet?.title}
          className="w-full h-[130px] sm:h-[160px] md:h-[190px] lg:h-[220px] xl:h-[250px] object-cover"
        />
      )}

      <div className="flex flex-col md:flex-row items-center py-3 px-2 sm:px-6 md:px-12 lg:px-20">
        {channelDetail?.snippet?.thumbnails?.default?.url ? (
          <img
            src={channelDetail?.snippet?.thumbnails?.default?.url}
            alt={channelDetail?.snippet?.title}
            className="rounded-full h-[100px] w-[100px] md:w-[128px] md:h-[128px]"
          />
        ) : (
          <Skeleton className="rounded-full h-[100px] w-[100px] md:w-[128px] md:h-[128px]" />
        )}

        <div className="flex flex-col items-center md:items-start p-3">
          <h1 className="font-bold text-xl md:text-2xl py-2 md:py-1">
            {channelDetail?.snippet?.title || (
              <Skeleton className="w-[200px]" />
            )}
          </h1>

          <div className="flex text-gray-300 space-x-4">
            <p>
              {channelDetail?.snippet?.customUrl || (
                <Skeleton className="w-[70px]" />
              )}
            </p>
            <p>
              {convertNumber(
                parseInt(channelDetail?.statistics?.subscriberCount || 0)
              )}{" "}
              subscribers
            </p>
            <p>
              {convertNumber(channelDetail?.statistics?.videoCount) || 0} videos
            </p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      {loading ? <VideosLoader /> : <Videos videos={videos} />}
    </div>
  );
};

export default ChannelDetails;
