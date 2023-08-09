import React from "react";

export default function VideoLength({ length }) {
  const minutes = Math.floor(length / 60);
  const seconds = length - minutes * 60;
  const hours = Math.floor(minutes / 60);
  return (
    <span className="absolute bottom-1 right-1 bg-black py-1 px-2 text-white text-xs rounded-md">
      {length > 3600
        ? `${hours}:${minutes - hours * 60}:${seconds}`
        : minutes < 10
        ? `0${minutes}:${seconds}`
        : seconds === 0 || length === null
        ? `${minutes}:00`
        : seconds < 10
        ? `${minutes}:0${seconds}`
        : `${minutes}:${seconds}`}
    </span>
  );
}
