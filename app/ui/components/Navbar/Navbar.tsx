import { UserCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="w-max h-max">
            <Image
              width={60}
              height={60}
              src="/assets/logo_dimelope.jpg"
              alt="logo"
              className="rounded-full block md:hidden"
            />
            <Image
              src={"/assets/dimelope_bg_full.png"}
              alt="logo-dimelope"
              width={200}
              height={200}
              className="hidden md:block"
            />
          </div>
          <div className="w-full h-8 text-center">
            <input
              id="search-bar"
              type="text"
              placeholder="Buscar por evento, artista o lugar."
              className="w-64 rounded-md h-full text-gray-900 ring-1 text-sm p-2"
            />
          </div>
          <div id="user-logo">
            <UserCircleIcon className="w-11" />
          </div>
        </div>
      </div>
    </nav>
  );
};
