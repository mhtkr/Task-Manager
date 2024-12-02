import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Items from './Items'
const Todo = () => {
  const [todoList, seTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === ""){
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isDone: false,
    }
    seTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
  }

  const remove = (id) => {
    seTodoList((prvTodo)=>{
      return prvTodo.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    seTodoList((prvTodo)=> {
      return prvTodo.map((todo)=>{
        if(todo.id === id){
          return {...todo, isDone: !todo.isDone}
        }
        return todo;
      })
    }
  )}

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
    
  },[todoList])
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>

    <div className='flex items-center mt mt-7 gap-2'>
      <img className='w-8' src={todo_icon}/>
      <h1 className='text-3xl font-semibold'>Task-Manager</h1>
    </div>

    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
      <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
      placeholder:text-slate-600' type='text' placeholder='Add your task'/>
      <button onClick={add} className='border-none rounded-full bg-teal-300 w-32 h-14 text-lg font-medium cursor-pointer'>Add +</button>
    </div>

    <div>
    {todoList.map((item, index)=>{
      return <Items key={index} text={item.text} id={item.id} isDone={item.isDone} remove={remove} toggle={toggle}/>
    })}
    </div>
    </div>
    
  )
}

export default Todo