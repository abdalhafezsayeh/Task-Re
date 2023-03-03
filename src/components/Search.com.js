import React from "react";

function Search() {

  return (
    <div className="border-slate-300 border-2 rounded-lg relative ">
      <span className="py-1 px-3 inline-block rotate-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 inline-block text-slate-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input placeholder="Can i help you?" className="focus:outline-none" />
      <button className="bg-white outline-1  sm:visible invisible outline outline-slate-400 rounded-lg h-full  px-3 text-red-500 font-medium">
        code
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 inline-block text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Search;
