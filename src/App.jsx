import React, { useEffect, useState } from 'react';
import Todo from './Components/Todo';
import { Overdue } from './Components/Overdue';
import Login from './Components/Login';
import { useSelector } from 'react-redux';

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

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className='bg-gray-200 py-10 flex flex-col items-center gap-5 min-h-screen'>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <button
            onClick={() => setShowTodo((prev) => !prev)}
            className={`${
              todoList.length > 0
                ? 'bg-blue-500 text-white px-5 py-2 rounded-full font-medium'
                : 'bg-gray-300 text-gray-500 px-5 py-2 rounded-full font-medium cursor-not-allowed'
            }`}
            disabled={todoList.length === 0}
          >
            {showTodo ? 'View Overdue Tasks' : 'View Todo List'}
          </button>

          {showTodo ? (
            <Todo todoList={todoList} setTodoList={setTodoList} />
          ) : (
            <Overdue overdueList={overdueTasks} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
