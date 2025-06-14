import { Link2 } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className=" bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-4 flex items-center ">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <Link2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Shortly</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
