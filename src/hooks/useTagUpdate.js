import { useState } from "react";

const useTagUpdate = () => {
  const [tagInput, setTagInput] = useState("");
  const [tagList, setTagList] = useState([]);

  const handleDeleteTag = (id) =>
    setTagList((prev) => prev.filter((_, idx) => id !== idx));

  const handleAddTag = (e) => {
    if (e.key === "Enter") {
      setTagList((prev) => [...prev, e.target.value]);
      setTagInput("");
    }
  };
  return { tagList, tagInput, setTagInput, handleDeleteTag, handleAddTag };
};

export default useTagUpdate;
