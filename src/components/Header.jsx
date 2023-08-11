import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import youtubeLogo from "../assets/icons8-youtube-48.png";
import { Context } from "../ContextApi/contextApi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setShowSideNav, showSideNav, query, setQuery, isLogin,email } =
    useContext(Context);
  const navigate = useNavigate();

  const handleDesktopSearch = () => {
    setQuery(query);
    navigate(`search/${query}`);
  };

  const name = JSON.parse(localStorage.getItem(email))?.username
  return (
    <header className="flex justify-between bg-[#000000] w-screen lg:px-6 px-2 h-12 items-center fixed top-0 z-10">
      {/* logo */}
      <div className="flex justify-around items-center w-2/12 min-w-[120px] max-w-[210px]">
        <IconContext.Provider value={{ className: "burger-icon" }}>
          <RxHamburgerMenu onClick={() => setShowSideNav(!showSideNav)} />
        </IconContext.Provider>
        <div className="flex items-center">
          <img
            src={youtubeLogo}
            alt="YouTube Logo"
            className="lg:h-[35px] h-[25px] lg:w-[35px] w-[25px]"
          />
          <h1 className="lg:text-xl text-[15px] font-medium text-white">
            YouTube
          </h1>
        </div>
      </div>

      {/* searchbar */}
      <div className="hidden md:flex justify-self-center w-[37%] max-w-[450px] bg-[#1d1e1e] rounded-[12px] justify-evenly border-2 border-[#393737] items-center">
        <input
          type="search"
          placeholder="Search"
          className=" w-[87%] bg-[#000000] outline-none text-white text-sm rounded-l-[12px] py-1 px-4"
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconContext.Provider value={{ className: "search-icon" }}>
          <AiOutlineSearch onClick={handleDesktopSearch} />
        </IconContext.Provider>
      </div>

      {/* userprofilearea */}
      <div className="flex sm:gap-4 gap-2">
        <IconContext.Provider value={{ className: "search-mobile-icon" }}>
          <AiOutlineSearch onClick={()=>navigate("/search")}/>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "bell-icon" }}>
          <AiOutlineBell />
        </IconContext.Provider>
        {isLogin ? (
          <div className="flex justify-center items-center h-5 lg:h-7 w-5 lg:w-7 bg-white text-black font-bold rounded-[50%]">{name.slice(0,1).toUpperCase()}</div>
        ) : (
          <IconContext.Provider value={{ className: "profile-icon" }}>
            <CgProfile onClick={()=>navigate("/")}/>
          </IconContext.Provider>
        )}
      </div>
    </header>
  );
}
