import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Items from './Items'

const Todo = ({todoList, setTodoList}) => {

  const inputRef = useRef();
  const decRef = useRef();
  const dueDate = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    const inputDesc = decRef.current.value.trim();
    const inputDueDate = dueDate.current.value;

    if (inputText === "" || inputDesc === ""){
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      desc: inputDesc,
      dueDate: inputDueDate,
      isDone: false,
    };
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
    decRef.current.value = "";
    dueDate.current.value= "";
  };

  const remove = (id) => {
    setTodoList((prvTodo)=>{
      return prvTodo.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodoList((prvTodo)=> {
      return prvTodo.map((todo)=>{
        if(todo.id === id){
          return {...todo, isDone: !todo.isDone}
        }
        return todo;
      })
    }
  )}
    
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>
  
    <div className='flex items-center mt mt-5 gap-2'>
      <img className='w-8' src={todo_icon}/>
      <h1 className='text-3xl font-semibold'>Task-Manager</h1>
    </div>

    <div className='flex items-center mt-7 mb-3 bg-gray-200 rounded-full'>
      <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
      placeholder:text-slate-600' type='text' placeholder='Add your task'/>
      <button onClick={add} className='border-none rounded-full bg-blue-500 text-white w-32 h-14 text-lg font-medium cursor-pointer'>Add +</button>
    </div>
    <div className='bg-gray-200 rounded-lg'>
      <input
        ref={decRef}
        className='bg-transparent border-0 outline-none w-full h-14 pl-6 pr-2 placeholder:text-slate-600 rounded-full'
        type="text"
        placeholder="Description of the task..."
      />
    </div>

    <div className='bg-gray-200 rounded-lg mt-2'>
      <input
      ref={dueDate}
        className='bg-transparent border-0 outline-none w-full h-14 pl-6 pr-2 placeholder:text-slate-600 rounded-full'
        type="date"
        placeholder="Enter the due date..."
      />
    </div>

    <div>
    {todoList.map((item, index)=>{
      return <Items key={index} text={item.text} desc={item.desc} dueDate={item.dueDate} id={item.id} isDone={item.isDone} remove={remove} toggle={toggle}/>
    })}
    </div>
    </div>
    
  )
}

export default Todo