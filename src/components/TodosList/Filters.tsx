import { Dispatch, SetStateAction } from "react";

export const Filters = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Dispatch<SetStateAction<"all" | "active" | "completed">>;
}) => {
  return (
    <div className="flex justify-between mb-4">
      <button
        className={`px-4 py-2 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${
          filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`px-4 py-2 rounded ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};
