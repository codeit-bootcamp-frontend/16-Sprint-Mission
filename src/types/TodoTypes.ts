export interface Item {
  id: number | string;
  name: string;
  isCompleted: boolean;
}

export interface ItemDetail {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export interface DeleteItemResponse {
  message: string;
}

export interface UpdateItemRequest {
  isCompleted: boolean;
}

export interface AddItemRequest {
  name: string;
}

export interface UploadImageResponse {
  url: string;
}
