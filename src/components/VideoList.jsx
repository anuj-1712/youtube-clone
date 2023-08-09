import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../ContextApi/contextApi";
import loader from "../assets/giphy-unscreen.gif"

export default function VideoList() {
  const { data, loading } = useContext(Context);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {loading ? <img src={loader} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24"/>:
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className=""
            >
              {item?.type === "video" ? (
                <VideoCard
                  className="text-white"
                  id={item?.video?.videoId}
                  thumbnail={item?.video?.thumbnails[0]?.url}
                  channelLogo={item?.video?.author?.avatar[0]?.url}
                  views={item?.video?.stats?.views}
                  title={item?.video?.title}
                  channelName={item?.video?.author?.title}
                  length={item?.video?.lengthSeconds}
                  publishedTime={item?.video?.publishedTimeText}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
    </div>
  );
}
