import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const View = ({realData}) => {
  return (
    <div className="flex items-center justify-between p-2 px-3 mt-3 text-3xl font-semibold">
      <h1 className=" p-2 rounded-md text-6xl product">Amazon</h1>
      <div className=" p-2 px-4 rounded-md flex gap-2 text-3xl font-semibold">
        <h1 >🛒 Cart :</h1>
        <h1>{realData.filter(item=>item.Available).length}</h1>
        <span className='flex justify-center items-center text-4xl ml-10 cursor-pointer'>
         <IoMenuSharp/>
        </span>
      </div>
     </div>
  )
}

export default View
