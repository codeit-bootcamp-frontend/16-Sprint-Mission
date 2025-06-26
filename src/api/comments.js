import { BASE_API_URL } from "./config";

export async function getCommentsByProductId({ productId, limit = 5, cursor }) {
  const params = new URLSearchParams({ limit });
  if (cursor !== undefined) params.append("cursor", cursor);

  const res = await fetch(
    `${BASE_API_URL}/products/${productId}/comments?${params.toString()}`
  );
  if (!res.ok) throw new Error("상품 문의내역을 불러오는데 실패했습니다.");
  return res.json();
}

export async function deleteCommentsByCommentId(commentId) {
  try {
    const response = await fetch(`${BASE_API_URL}/comments/${commentId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`댓글 삭제 실패: ${response.status}`);
    }

    return await response.json(); // or return true if response is empty
  } catch (error) {
    console.error("댓글 삭제 에러:", error);
    throw error;
  }
}

export async function updateCommentById({ commentId,content }) {
  try {
    const res = await fetch(
      `${BASE_API_URL}/comments/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      }
    );
    if (!res.ok) throw new Error("댓글 수정 실패");
    return await res.json();
  } catch (error) {
    console.error("댓글 수정 에러:", error);
    throw error;
  }
}
