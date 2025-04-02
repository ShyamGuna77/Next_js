


import React, { useState } from 'react'

interface TodoTypes {
    addTodo : (text:string) => void 
}

const TodoForm = ({addTodo}:TodoTypes) => {
    const [text,setText] = useState('')
    const handleSubmit = (e:React.FormEvent) => {
          e.preventDefault()
          if(text.trim()){
            addTodo(text)
            setText('')
          }
    
    }

  return (
    <form onSubmit={handleSubmit}  className='mb-4'>
        <input type='text'
         value={text}
         onChange={(e) => setText(e.target.value)}
          className='flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500' />
        <button >ADD TODO</button>
    </form >
  )
}

export default TodoForm