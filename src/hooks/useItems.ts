'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo, UpdateTodo } from '@/types/todo';
import { getItems, getItemDetail, createItem, updateItem, deleteItem } from '@/api/itemsApi';
import { useTodoStore } from '@/store/TodoStore';

/**
 * 이 파일은 React Query 훅을 정의합니다.
 * Zustand와 연동하여 상태를 관리합니다.
 * itemId는 모두 number 타입으로 사용합니다.
 */

// Zustand의 Todos 상태를 React Query 캐시와 동기화하는 훅
export const useGetItems = () => {
  const _setTodos = useTodoStore((state) => state.setTodos);

  return useQuery<Todo[], Error>({
    queryKey: ['items'],
    queryFn: getItems,
    select: (data) => {
      return data;
    },
    // React Query v5에는 onSuccess 없음 → data를 watch하는 useEffect 사용
  });
};

// 상세 조회
export const useGetItemDetail = (itemId: number) => {
  const setCurrentTodo = useTodoStore((state) => state.setCurrentTodo);

  return useQuery<Todo, Error>({
    queryKey: ['items', itemId],
    queryFn: () => getItemDetail(itemId),
    enabled: !!itemId,
    select: (data) => {
      setCurrentTodo(data);
      return data;
    },
  });
};

// 항목 등록
export const useCreateItem = () => {
  const queryClient = useQueryClient();
  const addTodo = useTodoStore((state) => state.addTodo);

  return useMutation({
    mutationFn: createItem,
    onSettled: (data) => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      if (data) {
        addTodo(data);
      }
    },
  });
};

// 항목 수정 + 낙관적 업데이트
export const useUpdateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, updatedItem }: { itemId: number; updatedItem: UpdateTodo }) =>
      updateItem(itemId, updatedItem), // 1: mutation이 실행되기 전에 호출

    onMutate: async ({ itemId, updatedItem }) => {
      // 진행 중인 'items' 쿼리 취소
      await queryClient.cancelQueries({ queryKey: ['items'] }); // 이전 값 저장

      const previousItems = queryClient.getQueryData<Todo[]>(['items']); // 쿼리 캐시를 낙관적으로 업데이트

      queryClient.setQueryData<Todo[]>(['items'], (old) => {
        if (!old) return old;
        return old.map((item) => (item.id === itemId ? { ...item, ...updatedItem } : item));
      }); // 컨텍스트 객체에 이전 값 반환 (실패 시 롤백에 사용)

      return { previousItems };
    },

    // 2: mutation 실패 시 호출 (롤백 로직)
    onError: (err, variables, context) => {
      if (context?.previousItems) {
        // 캐시를 이전 값으로 롤백
        queryClient.setQueryData<Todo[]>(['items'], context.previousItems);
      }
    },

    // 3: 성공, 실패 여부와 관계없이 mutation이 완료된 후 호출
    onSettled: () => {
      // 서버 데이터와 동기화를 위해 'items' 쿼리를 무효화하고 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });
};

// 항목 삭제
export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return useMutation({
    mutationFn: deleteItem,
    onSettled: (data, error, itemId) => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      if (itemId) {
        deleteTodo(itemId);
      }
    },
  });
};
