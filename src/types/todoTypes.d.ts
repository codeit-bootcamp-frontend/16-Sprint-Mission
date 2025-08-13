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

interface TodoResponseBase {
  id: number;
  tenantId: string;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
}

export interface PostTodoResponse extends TodoResponseBase {}

export interface PatchTodoResponse extends TodoResponseBase {}
