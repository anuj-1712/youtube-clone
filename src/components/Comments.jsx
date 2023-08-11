import React from "react";

export default function Comments({ avatar, content, publishedTime, user }) {
  return (
    <div className="flex gap-3 items-center mt-6">
      <img src={`${avatar}`} className="h-12 w-12 rounded-[50%]" />
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-2">
          <p className="text-white text-sm">{user}</p>
          <p className="text-[#aaa] text-sm">{publishedTime}</p>
        </div>
        <p className="text-white text-sm">{content}</p>
      </div>
    </div>
  );
}
