'use client'

import { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo,FilterdTodos } from "./types/todo";

export default function Home() {
  const [todos ,setTodos] = useState<Todo[]>([])
  const [filter,setFiletr] = useState<FilterdTodos>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

    const toggleTodo = (id: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

      const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };

      const editTodo = (id:string,text:string)=> {
         setTodos(
           todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
         );
      }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          filter={filter}
          setFilter={setFiletr}
        />
      </div>
    </main>
  );
}
