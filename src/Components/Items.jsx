import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import del from '../assets/delete.png';

const Items = ({ text, desc, dueDate, id, isDone, remove, toggle, isOverdue }) => {
  const formattedCreationDate = new Date(id).toLocaleString();

  const overdueClass = isOverdue ? 'bg-red-300' : '';

  return (
    <div className={`bg-blue-100 p-3 m-3 rounded-lg ${overdueClass}`}>
      <div className='flex items-center my-3 gap-2'>
        <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
          <img className='w-6' src={isDone ? tick : not_tick} alt="tick icon" />
          <p className={`ml-4 text-[17px] ${isDone ? 'line-through decoration-slate-500' : ''}`}>
            {text}
          </p>
        </div>
        <img className='w-4 cursor-pointer' onClick={() => remove(id)} src={del} alt="delete icon" />
      </div>

      {desc && (
        <div className='flex bg-gray-100 text-slate-700 min-h-10 items-center rounded-md w-full p-4'>
          <div>{desc}</div>
        </div>
      )}

      <div className='mt-2 bg-blue-300 rounded-full p-1 pl-3'>
        <p className="text-sm text-gray-600">Created on: {formattedCreationDate}</p>
      </div>
      <div className='mt-2 bg-red-300 rounded-full p-1 pl-3'>
        <p className="text-sm text-red-600">Due date: {dueDate}</p>
      </div>
    </div>
  );
};

export default Items;
