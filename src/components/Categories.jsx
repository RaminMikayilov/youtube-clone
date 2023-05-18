import React from "react";
import { categories } from "../utils/constants";

// context
import useYoutubeContext from "../hooks/useYoutubeContext";

const Categories = () => {
  const { activeCategory, setActiveCategory } = useYoutubeContext();

  return (
    <div className="flex flex-row md:flex-col w-full md:w-1/5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-2 md:py-0 text-sm md:text-lg">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`text-white px-3 py-2 md:px-4 md:py-3 mr-2 cursor-pointer bg-cGray md:bg-transparent md:hover:bg-cGray duration-300 rounded-lg font-bold flex items-center gap-2 md:gap-4 ${
            category.name === activeCategory &&
            "bg-white text-cGray md:text-white md:!bg-cGray"
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
