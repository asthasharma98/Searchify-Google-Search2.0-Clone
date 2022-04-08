import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔍 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📺 Videos" },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 ">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className="dark:text-gray-300 text-gray-700 m-3 hover:text-gray-700 mb-0"
          activeClassName=" text-blue-600 border-b-2 dark:text-blue-400 border-blue-600 pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
