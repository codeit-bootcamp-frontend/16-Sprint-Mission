export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoFormData {
  todo: string;
}

export interface MutationContext {
  previousTodos?: Todo[];
}