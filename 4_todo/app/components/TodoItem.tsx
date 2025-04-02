
import { useState } from "react"
import { Todo } from "../types/todo"

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text:string) => void;
};

const TodoItem = ({todo,toggleTodo,deleteTodo,editTodo}:TodoItemProps) => {
    const [isEditing,setIsEditing ] = useState(false)
    const [editText,seteditText] = useState(todo.text)


    const handleForm = () => {
        if(editText.trim() && editText!== todo.text){
            editTodo(todo.id,editText)
        }else {
            seteditText(todo.text)
        }
        setIsEditing(false)
          
    }

   
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 group">
      {isEditing ? (
        <div className="flex flex-grow mr-4">
          <input
            type="text"
            value={editText}
            onChange={(e) => seteditText(e.target.value)}
            className="flex-grow p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleForm}
            className="ml-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            className="ml-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              seteditText(todo.text);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center flex-grow">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-4 h-4 mr-2 cursor-pointer"
          />
          <span
            className={`flex-grow ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="mr-2 text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem