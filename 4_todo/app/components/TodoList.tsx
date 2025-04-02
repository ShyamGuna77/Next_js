

import { Todo,FilterdTodos } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  filter: FilterdTodos;
  setFilter: (filter: FilterdTodos) => void;
}



const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, filter, setFilter }: TodoListProps) => {
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
    });
    const activeTodosCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className="bg-white rounded shadow">
            <div className="flex justify-between p-4 border-b border-gray-200">
                <span className="text-sm text-gray-600">
                    {activeTodosCount} item{activeTodosCount !== 1 ? "s" : ""} left
                </span>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-2 py-1 rounded ${
                            filter === "all"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("active")}
                        className={`px-2 py-1 rounded ${
                            filter === "active"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setFilter("Completed")}
                        className={`px-2 py-1 rounded ${
                            filter === "Completed"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Completed
                    </button>
                </div>
            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList