import React from "react";

export default function TagInput({ tags, setTags, maxTags = 5 }) {
  const addTag = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value.trim();
    if (!value || tags.includes(value) || tags.lenth >= maxTags) return;

    const nextTags = [...tags, value];
    setTags(nextTags);
    e.target.value = "";
  };

  const removeTag = (targetTag) => {
    const nextTags = tags.filter((tag) => tag !== targetTag);
    setTags(nextTags);
  };

  return (
    <div className="tag-input-wrapper">
      <input type="text" placeholder="태그를 입력해주세요" onKeyDown={addTag} />
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag} className="tag-chip">
            #{tag}
            <button type="button" onClick={() => removeTag(tag)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
