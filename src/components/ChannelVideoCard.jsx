import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "./VideoLength";

export default function ChannelVideoCard({
  id,
  views,
  thumbnail,
  channelLogo,
  title,
  length,
  publishedTime,
}) {
  return (
    <>
      <Link to={`/video/${id}`}>
        <div className="flex flex-col hover:cursor-pointer">
          {/* thumbnail secion */}
          <div className="relative bg-white w-full">
            <img src={`${thumbnail}`} className="h-full w-full object-cover" />
            {length && <VideoLength length={length} />}
          </div>

          {/* title section */}
          <div className="flex items-center gap-4 mt-4 mb-2">
            <img className="h-7 w-7 rounded-[50%]" src={channelLogo}></img>
            <p className="text-white text-xl font-medium">
              {title?.length > 30 ? `${title.slice(0, 30)}...` : title}
            </p>
          </div>
          {/* video details */}
          <div className="flex gap-1 ml-12">
            <p className="text-sm text-[#9E9FA5]">
              {views >= 1000 && views < 1000000
                ? `${Math.round(views / 1000)}k views`
                : views >= 1000000
                ? `${Math.round(views / 1000000)}M views`
                : `${views} views`}
            </p>
            <p className="text-sm text-[#9E9FA5]"> • {publishedTime}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
