

export interface Todo {
    id: string ,
    text:string,
    completed :boolean
}

export type FilterdTodos  = "all" | "active" | "Completed"