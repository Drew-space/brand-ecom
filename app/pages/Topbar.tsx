import { ArrowUpRight } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div
      className="bg-black text-white text-center p-2 text-xs md:text-sm lg:text-base
 font-primary font-semibold  items-center flex justify-center   "
    >
      <div className=" flex flex-row justify-center items-center gap-2">
        <p>Subscribe to out NewsLetter For Lastest Collection</p>
        <ArrowUpRight className="" size={20} />
      </div>
    </div>
  );
};
export default Topbar;
