import React from "react";
import user from '../assets/user.jpg'
import { IconArrow } from "./Icons.com";


function OptionProfile() {
  return (
    <div className="border-b-2 border-slate-200 py-4 pr-10">
      <div className="w-44 flex justify-around items-center ml-auto">
        <span className="inline-block">
          <img src={user} className="w-10 h-10 inline-block rounded-full" />
        </span>
        <span className="inline-block text-slate-600 font-medium">
          Islam alsultan
        </span>
        <span className="cursor-pointer">
          <IconArrow />
        </span>
      </div>
    </div>
  );
}

export default OptionProfile;
