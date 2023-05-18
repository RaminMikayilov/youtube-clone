import React from "react";
import Categories from "./Categories";
import Videos from "./Videos";

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-3 ">
      <Categories />
      <Videos />
    </div>
  );
};

export default Body;
