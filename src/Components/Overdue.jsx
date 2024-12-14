import React, { useState } from 'react'
import overdue_icon from '../assets/clock.png'

export const Overdue = () => {

  const [visible, setVisible] = useState(false);

  const toogleVisible = () => {
    setVisible((prev) => !prev)
  };

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>
        <div className='flex items-center mt mt-5 gap-2'>
            <img className='w-8' src={overdue_icon}/>
            <h1 className='text-3xl font-semibold'>Overdue-Tasks</h1>
        </div>

        <div>
            
        </div>
    </div>
  )
}
