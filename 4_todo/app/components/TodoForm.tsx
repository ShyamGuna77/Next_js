


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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors">
          ADD TODO
        </button>
      </div>
    </form>
  );
}

export default TodoForm