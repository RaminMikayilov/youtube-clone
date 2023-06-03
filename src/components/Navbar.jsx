import React from "react";

import { Link } from "react-router-dom";

// icons
import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 md:px-8 py-3 md:py-6 sticky w-full top-0 z-10 bg-cBlack shadow-md">
      {/* logo */}
      <Link to="/">
        <div className="flex text-3xl md:text-4xl cursor-pointer">
          <AiFillYoutube color="#f00" />
          <ImYoutube2 color="#fff" />
        </div>
      </Link>

      {/* searchbar */}
      <SearchBar />
    </nav>
  );
};

export default Navbar;
