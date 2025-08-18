const BASE_URL = process.env.REACT_APP_API_URL;

export const updateComment = async (id, updatedComment) => {
  const response = await fetch(`${BASE_URL}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: updatedComment }),
  });

  if (!response.ok) {
    throw new Error("문제가 발생해 댓글을 수정하지 못했습니다.");
  }

  const data = await response.json();
  return data;
};
