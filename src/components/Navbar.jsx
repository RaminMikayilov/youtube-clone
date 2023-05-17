import React from "react";

// icons
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 md:px-8 py-3">
      {/* icons */}
      <div className="flex text-3xl cursor-pointer">
        <AiFillYoutube color="#f00" />
        <ImYoutube2 color="#fff" />
      </div>
      <form className="flex items-center bg-cGray rounded-full w-3/5 sm:w-1/2 md:w-1/3 md:mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 md:py-2 w-full outline-none focus:outline-blue-800 text-white bg-transparent rounded-l-full"
        />
        <span className="text-xl md:text-2xl cursor-pointer px-2 md:p-2">
          <AiOutlineSearch color="#fff" />
        </span>
      </form>
    </nav>
  );
};

export default Navbar;
