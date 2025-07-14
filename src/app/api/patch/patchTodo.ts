export type PatchItemPayload = Partial<{
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}>;

export const patchItem = async (
  itemId: string | number,
  data: PatchItemPayload
): Promise<void> => {
  const res = await fetch(
    `https://assignment-todolist-api.vercel.app/api/jinsun/items/${itemId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`아이템 업데이트 실패: ${error}`);
  }
};
