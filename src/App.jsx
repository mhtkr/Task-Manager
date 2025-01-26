import React, { useEffect, useState } from 'react';
import Todo from './Components/Todo';
import { Overdue } from './Components/Overdue';

const App = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  );

  const [showTodo, setShowTodo] = useState(true);

  const checkOverdue = (dueDate) => {
    const currentDate = new Date().toISOString().split('T')[0];
    return new Date(dueDate) < new Date(currentDate);
  };

  const overdueTasks = todoList.filter((task) => checkOverdue(task.dueDate));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className='bg-gray-200 py-10 flex flex-col items-center gap-5 min-h-screen'>
      <button
        onClick={() => setShowTodo((prev) => !prev)}
        className='bg-blue-500 text-white px-5 py-2 rounded-full font-medium'
      >
        {showTodo ? 'View Overdue Tasks' : 'View Todo List'}
      </button>

      {showTodo ? (
        <Todo todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <Overdue overdueList={overdueTasks} />
      )}
    </div>
  );
};

export default App;
