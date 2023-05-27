import React from "react";
import { categories } from "../utils/constants";

// context
import useYoutubeContext from "../hooks/useYoutubeContext";

const Categories = () => {
  const { activeCategory, setActiveCategory } = useYoutubeContext();

  return (
    <div className="flex flex-row md:flex-col w-full md:w-1/5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-2 md:py-0 text-sm md:text-lg md:overflow-y-scroll md:h-[85vh] md:border-r-2 border-cGray sticky top-[53px] z-10 md:top-[100px] left-0 bg-cBlack">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`px-3 py-2 md:px-4 md:py-3 mr-2 cursor-pointer bg-cGray md:hover:bg-cGray duration-300 rounded-lg font-bold flex items-center gap-2 md:gap-4 ${
            category.name === activeCategory
              ? "bg-white text-cGray md:text-white md:bg-cGray"
              : "text-white md:bg-transparent"
          }`}
          onClick={() => setActiveCategory(category.name)}
        >
          <span className="text-lg md:text-xl">{category.icon}</span>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
