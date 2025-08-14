export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
  memo?: string;
  imageUrl?: string;
}

export type NewTodo = {
  name: string;
};

export type UpdateTodo = Partial<Omit<Todo, 'id'>>;
