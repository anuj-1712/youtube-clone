import React, { useContext } from "react";
import { Context } from "../ContextApi/contextApi";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  // array that stores all the categories
  const categories = [
    "All",
    "Trending",
    "Music",
    "Films",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Learning",
    "Fashion & Beauty"
  ];
  const {setSelectedCategories} = useContext(Context)
  const navigate = useNavigate()

  const handleCategory = (category) =>{
    category === "All" ?  setSelectedCategories("New") :  setSelectedCategories(category)
    navigate("/")
  }

  return (
    <>
      <div className="hidden lg:flex items-end md:flex-row gap-4 w-full lg:pb-4 bg-[#000000] z-10">
        {categories.map((category, index) => {
          return (
            <button
            onClick={()=>handleCategory(category)}
              key={index}
              className="text-white bg-[#252525] px-4 py-[0.4rem] rounded-lg text-sm hover:bg-[#37373b]"
            >{category}</button>
          );
        })}
      </div>
    </>
  );
}
