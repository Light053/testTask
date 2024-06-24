export const initialTodos: Todo[] = [
  {
    title: 'Todo 1',
    completed: false,
    id: Date.now(),
  },
  {
    title: 'Todo 2',
    completed: false,
    id: Date.now() + 1,
  },
  {
    title: 'Todo 3',
    completed: false,
    id: Date.now() + 2,
  },
];

export interface Todo {
  title: string;
  completed: boolean;
  id: number;
}
