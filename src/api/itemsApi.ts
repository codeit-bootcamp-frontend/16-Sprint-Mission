import { NewTodo, Todo, UpdateTodo } from '@/types/todo';

const BASE_URL = 'https://assignment-todolist-api.vercel.app/api/qoalswl/items';

// 목록 조회
export const getItems = async (): Promise<Todo[]> => {
  const res = await fetch(BASE_URL, { method: 'GET' });
  if (!res.ok) throw new Error('목록을 가져오는 데 실패했습니다.');
  return res.json();
};

// 상세 조회
export const getItemDetail = async (itemId: number): Promise<Todo> => {
  const res = await fetch(`${BASE_URL}/${itemId}`, { method: 'GET' });
  if (!res.ok) throw new Error('상세 정보를 가져오는 데 실패했습니다.');
  return res.json();
};

// 항목 등록
export const createItem = async (newItem: NewTodo): Promise<Todo> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem),
  });
  if (!res.ok) throw new Error('항목 등록에 실패했습니다.');
  return res.json();
};

// 항목 수정
export const updateItem = async (itemId: number, updatedItem: UpdateTodo): Promise<Todo> => {
  const res = await fetch(`${BASE_URL}/${itemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedItem),
  });
  if (!res.ok) throw new Error('항목 수정에 실패했습니다.');
  return res.json();
};

// 항목 삭제
export const deleteItem = async (itemId: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${itemId}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('항목 삭제에 실패했습니다.');
};
