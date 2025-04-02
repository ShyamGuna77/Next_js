'use client'

import { useState } from "react";
import TodoItem from "./components/TodoItem";
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
  return (
    <div>
      <h2 className="text-xl font-bold m-6 p-6 text-center text-blue-500">Todo APP</h2>

    </div>
  );
}
