import { Item } from "@/types/todo";
import { useState, useEffect } from "react";

const useTodoUpdate = (initialData: Item) => {
  const data = initialData;
  const [name, setName] = useState(data.name);
  const [image, setImage] = useState<string | undefined>(data.imageUrl);
  const [memo, setMemo] = useState(data.memo);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const variant = isCompleted ? "done" : "todo";

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const checkUpdate =
      data.name !== name ||
      data.imageUrl !== image ||
      data.isCompleted !== isCompleted ||
      data.memo !== memo;

    setIsUpdated(checkUpdate);
  }, [data, name, image, isCompleted, memo]);

  return {
    data,
    name,
    setName,
    image,
    setImage,
    memo,
    setMemo,
    isCompleted,
    setIsCompleted,
    isUpdated,
    variant,
  };
};

export default useTodoUpdate;
