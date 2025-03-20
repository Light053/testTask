export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const FilterTodos = (
  todos: Todo[],
  filter: "all" | "active" | "completed"
) => {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
