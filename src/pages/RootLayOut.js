import React from "react";
import { Outlet } from "react-router-dom";
import OptionProfile from "../components/OptionProfileTop.com";
import SideBar from "../components/SideBar.com";

function RooyLayOut() {
  return (
    <div className="flex">
      <div className="h-screen sticky top-0">
        <SideBar />
      </div>

      <div className="w-full">
        <div className="bg-white z-50 sticky top-0">
          <OptionProfile />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default RooyLayOut;
