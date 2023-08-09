import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "./VideoLength";

export default function Searchcard({
  id,
  title,
  channelName,
  publishedTime,
  views,
  thumbnail,
  length,
  channelLogo,
  descSnippet,
}) {

  return (
    <Link to={`/video/${id}`}>
      <div className="flex flex-col sm:flex-row gap-2 w-full hover:cursor-pointer">
        <div className="relative w-full lg:w-1/3">
          <img src={`${thumbnail}`} className="h-full w-full object-cover" />
          {length && <VideoLength length={length} />}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-white text-sm sm:text-xl font-semibold">{title?.length > 70 ? `${title.slice(0, 70)}...` : title}</p>
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
          <div className="flex gap-2 items-center">
            <img src={channelLogo} className="h-7 w-7 rounded-[50%]" />
            <p className="text-[#9E9FA5] text-xs">{channelName}</p>
          </div>
          <p className="text-[#9E9FA5] text-xs">{descSnippet}</p>
        </div>
      </div>
    </Link>
  );
}
