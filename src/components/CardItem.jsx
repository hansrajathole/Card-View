import React, { useState } from 'react'

const CardItem = ({newData}) => {

    
  return (
    <div className='absolute'>
        <div className={`min-h-[85%] w-[50%] bg-slate-200  fixed right-0 rounded-md p-5  flex gap-5`}>
        <div className='h-[150px] w-[300px] rounded-md overflow-hidden' >
            <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-full flex justify-between'>
            <div >
            <h1 className='text-2xl font-semibold'>{newData.name}</h1>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae!</p>
            <h1 className='text-2xl font-semibold'>price</h1>
            </div>
            <div>
                <button
                onClick={()=>{
                    seton(!on)
                }}
                className='bg-red-500 p-2 rounded-md font-semibold'>Remove</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardItem