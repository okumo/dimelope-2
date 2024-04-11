import React from "react";

export const MobileNavigationMenu = () => {
  return (
    <div className="bg-yellow-500 text-black items-center text-center fixed bottom-0 w-full md:hidden rounded-t-xl">
      <button className="relative inline-flex items-center justify-center p-0.5 my-1.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
        <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          🎉 CREAR UN EVENTO 🎉
        </span>
      </button>
    </div>
  );
};
