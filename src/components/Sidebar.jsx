import React, { useContext } from "react";
import { GoHomeFill } from "react-icons/go";
import {
  PiVideoBold,
  PiClockCounterClockwiseBold,
  PiClockBold,
} from "react-icons/pi";
import {
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdOndemandVideo,
} from "react-icons/md";
import { IconContext } from "react-icons";
import { Context } from "../ContextApi/contextApi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { showSideNav,setShowSideNav } = useContext(Context);
  return (
    <>
      {showSideNav && <IconContext.Provider value={{ className: "sidebar-icons" }}>
        <nav
          className="w-full sm:w-[20%] flex flex-col fixed h-screen left-0 top-[45px] px-8 z-20 bg-[#000000]"
          id="sidebar"
        >
          <div className="flex flex-col gap-4 my-4">
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <GoHomeFill />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>Home</Link>
            </div>
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <PiVideoBold />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>Shorts</Link>
            </div>
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <MdOutlineSubscriptions />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>Subscriptions</Link>
            </div>
          </div>
          <hr className="w-full bg-[grey]" />
          <div className="flex flex-col gap-4 my-4">
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <MdOutlineVideoLibrary />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>Library</Link>
            </div>
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <PiClockCounterClockwiseBold />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>History</Link>
            </div>
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <MdOndemandVideo />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>Your Videos</Link>
            </div>
            <div className="flex gap-8 items-center rounded-md px-2 py-2 hover:bg-[#252525] hover:cursor-pointer">
              <PiClockBold />
              <Link to={"/"} className="text-white" onClick={()=>setShowSideNav(false)}>Watch Later</Link>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 my-4">
            <p className="text-white">Subscriptions</p>
            <div className="flex gap-8 items-center">
              <p></p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 my-4">
            <p className="text-white">Explore</p>
            <div className="flex justify-between">
              <p></p>
            </div>
          </div>
        </nav>
      </IconContext.Provider>}
      
    </>
  );
}
