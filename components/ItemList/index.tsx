import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";
import { Item, ItemListProps, ItemListBaseProps } from "@/types/todo";
import EmptyList from "./EmptyList";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import updateTodo from "../Todos/updateTodo";

const ItemListBase = ({
  items,
  variant,
  badgeTxt,
  emptyImg,
  emptyMsg,
}: ItemListBaseProps) => {
  const queryClient = useQueryClient();

  const { mutate: updateStatus } = useMutation({
    mutationFn: updateTodo,
    retry: 1,
    retryDelay: 0.3,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // 데이터 실시간 동기화를 위해 patch후 get 요청 처리 (patch 실패 시 정상적인 롤백 처리 위함)
    },
    onMutate: async ({ itemId, bodyData }) => {
      // 현재 진행 중인 쿼리가 있다면 취소
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // 롤백용 이전 쿼리 데이터 저장
      const prevItems = queryClient.getQueryData<Item[]>(["todos"]);

      // 캐시 업데이트
      if (prevItems) {
        queryClient.setQueryData<Item[]>(["todos"], (oldItems) => {
          if (!oldItems) return [];

          return oldItems?.map((item) =>
            item.id === itemId
              ? { ...item, isCompleted: bodyData.isCompleted }
              : item
          );
        });
      }

      // 에러 발생 시 이전 데이터 리턴 (onError에서 context로 사용)
      return { prevItems };
    },
    onError: (err, { itemId, bodyData }, context) => {
      if (context?.prevItems) {
        queryClient.setQueryData(["todos"], context.prevItems);
      }
      alert("투두 업데이트에 실패했습니다.");
    },
  });

  const handleClick = async (item: Item) => {
    const isCompleted = variant === "todo";

    // api 요청 데이터
    const bodyData = {
      name: item.name,
      memo: item.memo || "",
      imageUrl: item.imageUrl || "",
      isCompleted,
    };

    // 서버 요청
    updateStatus({ itemId: item.id, bodyData });
  };

  const isEmpty = !items || items.length === 0;
  const ListItemByVariant = variant === "todo" ? ListItem.Todo : ListItem.Done;

  return (
    <div className="w-full">
      <Badge text={badgeTxt} variant={variant} />
      {isEmpty && <EmptyList emptyImg={emptyImg} emptyMsg={emptyMsg} />}
      {!isEmpty && (
        <ul>
          {items.map((item) => (
            <ListItemByVariant
              key={`${variant}-${item.id}`}
              item={item}
              onClick={handleClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const ItemList = {
  Todo: ({ items, onClick }: ItemListProps) => {
    return (
      <ItemListBase
        items={items}
        variant="todo"
        badgeTxt="TO DO"
        emptyImg="/images/todo-empty.png"
        emptyMsg={
          <>
            할 일이 없어요.
            <br />
            TODO를 새롭게 추가해주세요!
          </>
        }
        onClick={onClick}
      />
    );
  },
  Done: ({ items, onClick }: ItemListProps) => {
    return (
      <ItemListBase
        items={items}
        variant="done"
        badgeTxt="DONE"
        emptyImg="/images/done-empty.png"
        emptyMsg={
          <>
            아직 다 한 일이 없어요.
            <br />
            해야 할 일을 체크해보세요!
          </>
        }
        onClick={onClick}
      />
    );
  },
};

export default ItemList;
