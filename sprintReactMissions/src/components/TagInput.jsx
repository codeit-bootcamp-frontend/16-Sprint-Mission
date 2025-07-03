import React from "react";

export default function TagInput({ maxTags = 5, onChange }) {
  const [tags, setTags] = React.useState([]);

  const addTag = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value.trim();
    if (!value || tags.includes(value) || tags.length >= maxTags) return;

    const nextTags = [...tags, value];
    setTags(nextTags);
    onChange?.(nextTags);
    e.target.value = ""; // 입력 후 input 비우기
  };

  const removeTag = (targetTags) => {
    const nextTags = tags.filter((tag) => tag !== targetTags);
    setTags(nextTags);
    onChange?.(nextTags);
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
