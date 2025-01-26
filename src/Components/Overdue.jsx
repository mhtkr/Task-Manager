import React from 'react';
import overdue_icon from '../assets/clock.png';
import Items from './Items';

export const Overdue = ({ overdueList }) => {
  return (
    <div className="bg-white w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center my-5 gap-2">
        <img className="w-8" src={overdue_icon} alt="Overdue Icon" />
        <h1 className="text-3xl font-semibold">Overdue Tasks</h1>
      </div>

      <div>
        {overdueList.length === 0 ? (
          <div className="text-gray-500">No overdue tasks</div>
        ) : (
          overdueList.map((item) => (
            <Items
              key={item.id}
              text={item.text}
              desc={item.desc}
              dueDate={item.dueDate}
              id={item.id}
              isDone={item.isDone}
              isOverdue={true}
            />
          ))
        )}
      </div>
    </div>
  );
};
