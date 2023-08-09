import React from "react";
import { GoHomeFill } from "react-icons/go";
import { PiVideoBold } from "react-icons/pi";
import { MdOutlineVideoLibrary, MdOutlineSubscriptions } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar for the desktop */}
      <IconContext.Provider value={{ className: "navbar-icons" }}>
        <div className=" hidden md:flex flex-col items-center fixed md:left-[0.7%] lg:left-[1.7%] gap-8">
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <GoHomeFill />
              <p className="text-[10px] text-white">Home</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <PiVideoBold />
              <p className="text-[10px] text-white">Shorts</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <MdOutlineSubscriptions />
              <p className="text-[10px] text-white">Subscriptions</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <MdOutlineVideoLibrary />
              <p className="text-[10px] text-white">Library</p>
            </div>
          </Link>
        </div>
      </IconContext.Provider>

      {/* navbar for mobile and tablets */}
      <IconContext.Provider value={{ className: "navbar-mobile-icons" }}>
        <div className="w-full md:hidden flex justify-evenly py-3 fixed bottom-0 bg-black z-10">
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <GoHomeFill />
              <p className="text-[10px] text-white">Home</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <PiVideoBold />
              <p className="text-[10px] text-white">Shorts</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <MdOutlineSubscriptions />
              <p className="text-[10px] text-white">Subscriptions</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex flex-col items-center gap-1">
              <MdOutlineVideoLibrary />
              <p className="text-[10px] text-white">Library</p>
            </div>
          </Link>
        </div>
      </IconContext.Provider>
    </>
  );
}
