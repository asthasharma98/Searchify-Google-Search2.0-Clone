import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl  font-style: italic font-bold py-1 px-2 rounded dark:bg-grey-500 dark:text-red-500">
            🔎 Searchify
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-2xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "🌞" : "🌛"}
        </button>
      </div>
      <Search />
    </div>
  );
};
