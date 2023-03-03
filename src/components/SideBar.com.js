import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconArrow, IconHome, IconSideBar } from "./Icons.com";

function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`h-screen ${open ? "w-60" : "w-20"} duration-500 pr-4 relative  border-r-2`}>
      {/* Start Button Arrow Felx Side  */}
      <span
        onClick={() => setOpen(!open)}
        className={`bg-white ${!open && "rotate-180"} p-1 shadow-md shadow-slate-300  duration-500 text-dark-purple text-3xl rounded-full absolute -right-4 top-20 border border-dark-purple cursor-pointer`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </span>

      {/* Content SideBar  */}
      <nav className="h-screen relative py-5">
        {/* Start Logo */}
        <div
          className={`border-solid ${!open && "scale-0"} duration-500 border-slate-400 border rounded-full w-48 m-auto  p-2 flex justify-around`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 inline-block bg-red-500 text-white rounded-full ${!open ? "rotate-180" : "rotate-0"} duration-150 `}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          </span>
          <span className="font-bold pr-4">Inframodern</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline-block text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </span>
        </div>
        <span className={`absolute top-5 ${open ? "-left-10" : "left-5"} duration-500`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-10 h-10 inline-block bg-red-500 text-white rounded-full ${!open ? "rotate-0" : "rotate-[360deg]"} duration-1000 `}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
            />
          </svg>
        </span>
        {/* End Logo */}

        {/* Home  */}
        <div className="relative">
          <ul>
            <li
              className={`border-b-2  border-slate-400 pb-2 m-3 font-medium ${!open && "scale-0"} duration-500`}><NavLink to="home">Home</NavLink>
            </li>
            <li
              className={`absolute top-1 ${open ? "-left-10" : "left-5"} duration-500 `}><IconHome />
            </li>
          </ul>
        </div>

        {/* Start Products data */}
        <div className="relative">
          <ul>
            <li className={`my-2 ${!open && "scale-0"} duration-500`}>
              <div className="relative  overflow-hidden">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className=" h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg font-semibold text-black">
                    Products data
                  </h1>
                </div>
                {/* Arrow Icon Products data */}
                <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <IconArrow />
                </div>

                {/* Content Products data */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <ul className="bg-white">
                    <li className="font-medium">
                      <NavLink to="productOne">Product One</NavLink>
                    </li>
                    <li className="font-medium">
                      <NavLink to="productTwo">Products Two</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li
              className={`absolute top-3 ${
                open ? "-left-10" : "left-5"
              } duration-500 `}
            >
              <IconSideBar />
            </li>
          </ul>
        </div>

        {/* Start  Brand & Branches */}
        <ul className="relative">
          <li className={`my-2 ${!open && "scale-0"} duration-500`}>
            <div className="relative  overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className=" h-12 w-full pl-5 flex items-center">
                <h1 className="text-lg font-semibold text-black">
                  Brand & Branches
                </h1>
              </div>
              {/* Arrow Icon  Brand & Branches */}
              <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                <IconArrow />
              </div>

              {/* Content  Brand & Branches */}
              <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div>
                  <ul>
                    <li className="font-medium">
                      <NavLink to="customers">Customers</NavLink>
                    </li>
                    <li className="font-medium">
                      <NavLink to="/">Users</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li
            className={`absolute top-3 ${
              open ? "-left-10" : "left-5"
            } duration-500 `}
          >
            <IconSideBar />
          </li>
        </ul>
        {/* Start Setting */}
        <ul>
          <li
            className={`absolute ${!open && "scale-0"} bottom-10 w-full duration-500`}>
            <div className="relative  overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className=" h-12  pl-5 flex items-center">
                <h1 className="text-lg font-semibold text-black">Setting</h1>
              </div>
              {/* Arrow Icon Setting */}
              <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                <IconArrow />
              </div>

              {/* Content  Setting */}
              <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                {/* Code Option Setting <ul> */}
              </div>
            </div>
            {/* Notification & Updates */}
            <div className={`${!open && "hidden"} mt-5`}>
              <span className="px-5">Notification & Updates</span>
            </div>
          </li>
          <li
            className={`absolute bottom-20 ${open ? "-left-10" : "left-5"} duration-500 `}>
            <IconSideBar />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
