import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import VideoList from "../components/VideoList";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-screen flex lg:mt-20 mt-16">
        <div className="w-0 md:w-1/12 xl:w-[6%]">
          <Navbar />
        </div>
        <div className="w-screen px-4">
        <Categories />
          <VideoList />
        </div>
      </div>
    </main>
  );
}
