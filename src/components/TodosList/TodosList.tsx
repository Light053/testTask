"use client";

import { useEffect, useState } from "react";
import { FilterTodos, Todo } from "../helpers/types";
import { TodosListItem } from "../TodosListItem/TodosListItem";
import { Filters } from "./Filters";
import { ShowMoreButton } from "./ShowMoreButton";

export const TodosList = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const filteredTodos = todos ? FilterTodos(todos, filter) : [];
  const visibleTodos = filteredTodos.slice(0, visibleCount);

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <Filters filter={filter} setFilter={setFilter} />
      <div className="space-y-2">
        {visibleTodos.map((todo) => (
          <TodosListItem key={todo.id} todo={todo} />
        ))}
      </div>
      <ShowMoreButton
        filteredTodos={filteredTodos.length}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
      />
    </div>
  );
};
