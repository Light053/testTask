import { Todo } from "../helpers/types";

export const TodosListItem = ({ todo }: { todo: Todo }) => {
  return (
    <div className="p-4 border rounded bg-white shadow-md flex items-center justify-between">
      <span
        className={todo.completed ? "line-through text-gray-500" : "text-black"}
      >
        {todo.title}
      </span>
      <span
        className={`px-2 py-1 text-sm rounded ${
          todo.completed
            ? "bg-green-500 text-white"
            : "bg-yellow-500 text-white"
        }`}
      >
        {todo.completed ? "Completed" : "Active"}
      </span>
    </div>
  );
};
