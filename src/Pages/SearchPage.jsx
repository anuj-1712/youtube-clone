import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { Context } from "../ContextApi/contextApi";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const { query, setQuery } = useContext(Context);
  const navigate = useNavigate()

  const handleDesktopSearch = () => {
    setQuery(query);
    navigate(`/search/${query}`);
  };

  return (
    <>
      <div className="flex mx-8 my-6 bg-[#1d1e1e] rounded-[12px] justify-evenly border-2 border-[#393737] items-center">
        <input
          type="search"
          placeholder="Search"
          className="w-11/12 bg-[#000000] outline-none text-white text-sm rounded-l-[12px] py-1 px-4"
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconContext.Provider value={{ className: "search-icon" }}>
          <AiOutlineSearch onClick={handleDesktopSearch} />
        </IconContext.Provider>
      </div>
    </>
  );
}
