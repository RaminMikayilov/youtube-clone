import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="flex items-center bg-cGray rounded-full w-3/5 sm:w-1/2 md:w-1/3 md:mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
        setSearch("");
      }}
    >
      <input
        type="text"
        placeholder="Search"
        className="px-3 py-1 md:py-2 w-full outline-none focus:outline-blue-800 text-white bg-transparent rounded-l-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="text-xl md:text-2xl cursor-pointer px-2 md:p-2">
        <AiOutlineSearch color="#fff" />
      </button>
    </form>
  );
};

export default SearchBar;
