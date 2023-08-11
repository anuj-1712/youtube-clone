import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "./VideoLength";

export default function SuggestedVideoCard({
  id,
  title,
  channelName,
  publishedTime,
  views,
  thumbnail,
  length,
}) {
  return (
    <>
      {thumbnail && (
        <Link to={`/video/${id}`}>
          <div className="flex flex-col sm:flex-row gap-2 w-full hover:cursor-pointer">
            <div className="relative w-full">
              <img
                src={`${thumbnail}`}
                className="h-full w-full object-cover"
              />
              {length && <VideoLength length={length} />}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white font-semibold lg:block hidden">
                {title?.length > 30 ? `${title.slice(0, 30)}...` : title}
              </p>
              <p className="text-white text-sm font-semibold lg:hidden block">
                {title}
              </p>
              <p className="text-[#9E9FA5] text-xs">{channelName}</p>
              <div className="flex gap-1">
                <p className="text-[#9E9FA5] text-xs">
                  {" "}
                  {views >= 1000 && views < 1000000
                    ? `${Math.round(views / 1000)}k views`
                    : views >= 1000000
                    ? `${Math.round(views / 1000000)}M views`
                    : `${views} views`}
                </p>
                <p className="text-[#9E9FA5] text-xs">• {publishedTime}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
