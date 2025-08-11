export interface TodoItemType {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface UpdateTodoData {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}
