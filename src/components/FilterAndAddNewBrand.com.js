
import React, { useState } from 'react'
import ModalCom from './Modal.com'

function FilterAndAddNewBrand() {

  const [showModal, setShowModal] = useState(false)
  const handleCloseMdal = _ => setShowModal(!showModal)
 

  return (
    <div className="mt-3 md:mt-0">
    <button className="capitalize border-red-600 border-[2px]  sm:visible invisible rounded-full px-6 text-red-600">
      filter
    </button>
    <span className=" border-r-2 pr-4 ml-3 invisible sm:visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-9- h-9 inline-block text-red-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
    {/* Button Add New Brand */}
    <button onClick={() => setShowModal(!showModal)} className="capitalize bg-red-600 text-white text-base py-1 px-2 md:px-3 rounded-full ml-3 hover:bg-white transition-all hover:border-red-500 border-2 hover:text-red-500">
      add new brand
    </button>

    {/* Modal  */}
    <ModalCom visible={showModal} onClose={handleCloseMdal} />

  </div>
  )
}

export default FilterAndAddNewBrand