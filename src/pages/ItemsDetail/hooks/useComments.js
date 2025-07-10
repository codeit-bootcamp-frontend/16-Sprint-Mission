import { useState, useEffect, useCallback } from "react";
import {
  deleteCommentsByCommentId,
  getCommentsByProductId,
  updateCommentById,
} from "../../../api/comments";

export function useComments(productId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getCommentsByProductId({ productId });
      setComments(res.list);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  const remove = useCallback(async (id) => {
    await deleteCommentsByCommentId(id);
    setComments((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const update = useCallback(async (id, content) => {
    await updateCommentById({ commentId: id, content });
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, content } : c))
    );
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { comments, loading, error, remove, update, refresh: load };
}
