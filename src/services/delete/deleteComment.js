const BASE_URL = "https://panda-market-api.vercel.app";

export const deleteComment = async (id) => {
  const response = await fetch(`${BASE_URL}/comments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("문제가 발생해 댓글을 삭제하지 못했습니다.");
  }
  const data = await response.json();
  return data;
};
