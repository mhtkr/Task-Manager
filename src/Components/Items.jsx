import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/delete.png'

const Items = ({text, id, isDone, remove, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isDone ? tick : not_tick}/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isDone ? "line-through" : ""}` }>{text}</p>
        </div>

        <img className='w-3.5 cursor-pointer' onClick={()=>{remove(id)}} src={del}/>
    </div>
  )
}

export default Items