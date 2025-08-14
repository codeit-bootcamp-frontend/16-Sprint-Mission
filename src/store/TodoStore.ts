import { create } from 'zustand';
import { Todo } from '@/types/todo';

interface TodoState {
  todos: Todo[];
  currentTodo: Todo | null;
  setTodos: (todos: Todo[]) => void;
  setCurrentTodo: (todo: Todo | null) => void;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  currentTodo: null,
  setTodos: (todos) => set({ todos }),
  setCurrentTodo: (todo) => set({ currentTodo: todo }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
