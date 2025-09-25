import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Heroicons

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center w-24 h-24 animate-spin">
        {/* Outer spinner border */}
        <div className="absolute w-full h-full rounded-full border-4 border-green-400 border-t-transparent"></div>
        
        {/* Center Icon */}
        <UserCircleIcon className="w-12 h-12 text-green-500 absolute" />
      </div>
    </div>
  );
};

export default Loader;
