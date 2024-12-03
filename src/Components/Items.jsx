import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/delete.png'

const Items = ({text, desc, id, isDone, remove, toggle}) => {
  return (
    <div className='bg-blue-100	p-3 m-3 rounded-lg'>
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-6' src={isDone ? tick : not_tick}/>
            <p className={`ml-4 text-[17px] decoration-slate-500 ${isDone ? "line-through" : ""}` }>{text}</p>
        </div>

        <img className='w-4 cursor-pointer' onClick={()=>{remove(id)}} src={del}/>
    </div>
    <div className='flex bg-gray-100 text-slate-700	min-h-10  items-center rounded-md w-full p-4'>
          {desc && (
          <div>{desc}</div>
          )}
    </div>
    </div>
  )
}

export default Items