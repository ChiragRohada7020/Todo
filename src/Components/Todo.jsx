import React from 'react'
import "../Css/input.css" 

const Todo = ({todo,delete1}) => {
  return (
    <div className='h-max flex flex-col  gap-2  items-center justify-center mt-5'>
    {todo.map((todo,index)=>{
    return (<div className='flex justify-center  ' key={index}><h1 className='p-5  rounded-l-lg w-56 bg-pink-100 font-serif'  >{todo}</h1> <button className='bg-red-500 text-white p-2 ' onClick={()=>delete1(index)} >Delete</button></div>)
  })}
    </div>
  )
}

export default Todo
