import React from "react";

const NavBar = () => {
  return (
    <nav className="p-3 bg-gray-400 flex">
      <form action="" className="mr-3 p-1 outline-none ">
        <input
          type="search"
          placeholder="Search"
          className="rounded-md border-solid border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          
        />
        
      </form>
      <select className="bg-transparent p-1 ml-3 text-white">
        <option value="">Relevance</option>
        <option value=""></option>
      </select>

      <select className="bg-transparent p-1 ml-3 text-white">
        <option value="">Ford</option>
        <option value="">BMW</option>
      </select>
    </nav>
  );
};

export default NavBar;
