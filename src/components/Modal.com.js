import React from 'react'
import { IconCube, IconEmail, IconIdentification, IconKey, IconTrach, IconUpDown, Identification } from './Icons.com';


function ModalCom({visible, onClose}) {

    const loopInputs = [
        {numberInput:1},
        {numberInput:2},
        {numberInput:3},
        {numberInput:4},
        {numberInput:5},
        {numberInput:6},
        {numberInput:7},
    ]

    if(!visible) return null;

  return (
    <div className="fixed top-0 inset-0 bg-black z-50 bg-opacity-30 backdrop-opacity-70 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded w-[80%]">
        {/* Header Modal */}
        <div className="flex justify-between p-4 border-b-2">
          <span className="flex items-center">
            {/* icon */}
            <span className="border-red-500 border-2 mr-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </span>
            <span className="font-medium text-sm">Add New User</span>
          </span>
          <span onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-gray-400 hover:rotate-180 duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        {/* Body Modal  */}
        <div className="flex p-5 justify-center">
          {/* Email  */}
          <div>
            <div className="bg-gray-100 py-4 pl-7 rounded-l-lg mb-5">
              <h5 className="text-[14px] font-medium text-slate-800">Email</h5>
              <span className="text-base text-slate-500">
                Type this user's email,to add and contact later
              </span>
            </div>
            {/* inputs  */}
            <div className="border-l-[1px] border-red-500 m-2 pl-5 ">
              {loopInputs.map((number, index) => (
                <div className="relative max-w-full mb-3 rounded-l-md" key={index}>
                  <input
                    placeholder="Example@example.com"
                    className="p-2 border-2 text-base pl-9 w-full rounded-l-md rounded-r-md focus:outline-none"
                  />
                  <span className="absolute left-0 top-0 bg-slate-200 h-full px-1 flex items-center rounded-l-md">
                    <IconEmail />
                  </span>
                  <span className="border-[1px] border-red-500 absolute bg-red-100 text-center text-red-500 top-1 -left-8 w-6 rounded-[4px] ">
                    {number.numberInput}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Job Titlt */}
          <div>
            <div className="bg-gray-100 py-4 pl-3 mb-5">
              <h5 className="text-[14px] font-medium text-slate-800">
                Jobtitle
              </h5>
              <span className="text-base text-slate-500">
                What's this new user's Jobtitle?
              </span>
            </div>
            {/* Inputs */}
            {loopInputs.map((num,index) => (
              <div
                className="relative  max-w-[95%] mb-3 rounded-l-md "
                key={index}
              >
                <input
                  placeholder="CFO.Accountant.etc"
                  className="p-2 border-2 text-base pl-9 w-full rounded-l-md rounded-r-md focus:outline-none"
                />
                <span className="absolute left-0 top-0 bg-slate-200 h-full px-1 flex items-center rounded-l-md">
                  <IconIdentification />
                </span>
              </div>
            ))}
          </div>
          {/* Code  */}
          <div>
            <div className="bg-gray-100 py-4 pl-3  mb-5">
              <h5 className="text-[14px] font-medium text-slate-800">Code</h5>
              <span className="text-base text-slate-500">
                Enter this user's code
              </span>
            </div>
            {/* Inputs  */}
            {loopInputs.map((num,index) => (
              <div
                className="relative mt-2 max-w-[90%] mb-3 rounded-l-md "
                key={index}
              >
                <input
                  placeholder="#000000000"
                  className="p-2 border-2 text-base pl-9 w-full rounded-l-md rounded-r-md focus:outline-none"
                />
                <span className="absolute left-0 top-0 bg-slate-200 h-full px-1 flex items-center rounded-l-md">
                  <IconKey />
                </span>
              </div>
            ))}
          </div>
          {/* Authorized Module  */}
          <div>
            <div className="bg-gray-100 py-4 pl-3 rounded-r-lg pr-2 mb-5">
              <h5 className="text-[14px] font-medium text-slate-800">
                Authorized module
              </h5>
              <span className="text-base text-slate-500">
                Which information module this user's authorized to use?
              </span>
            </div>
            {/* Inputs  */}
            {loopInputs.map((num,index) => (
              <div
                className="relative mt-2 max-w-[83%] mb-3 rounded-l-md "
                key={index}
              >
                <input
                 
                  className="p-2 border-2 text-base pl-9 w-full rounded-l-md rounded-r-md focus:outline-none"
                />
                <span className="absolute left-0 top-0 bg-slate-200 h-full px-1 flex items-center rounded-l-md">
                  <IconCube />
                </span>
                <span className="absolute right-2 top-0  h-full px-1 flex items-center rounded-l-md">
                  <IconUpDown />
                </span>
                <span className='absolute -right-10 top-1 p-1 border-[1px] border-red-500 rounded-md hover:p-[2px] transition-all duration-100 cursor-pointer'>
                  <IconTrach />
                </span>
              </div>
            ))}
                
          </div>
        </div>
        {/* Footer Modal  */}
        <div className='flex justify-between p-4 border-t-2'>
          <button className='text-red-500 font-medium bg-red-100 text-base py-2 px-5 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300'>Add new user input</button>
          <div>
            <button className='border-[1px] border-red-500 text-red-500 rounded-xl py-[3px] list-outside px-14 font-medium mr-2 hover:border-white hover:text-white hover:bg-red-500 transition-all duration-300 align-baseline'>cancel</button>
            <button className='bg-gray-400 text-white py-[3px] px-16 rounded-xl hover:border-gray-400 border-2 hover:bg-white hover:border-2 hover:text-gray-400 transition-all duration-300'>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCom