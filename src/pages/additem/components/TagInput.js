import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function TagInput({
  name = "productTag",
  label = "태그",
  tags,
  setTags,
  error,
  wrapperClass,
  inputClass,
  errorClass,
  tagContainerClass,
  tagClass,
  removeButtonClass,
  onBlur,
}) {
  const inputRef = useRef(null);
  const [isComposing, setIsComposing] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      const trimmed = inputRef.current.value.trim();
      if (trimmed && !tags.includes(trimmed)) {
        const newTags = [...tags, trimmed];
        setTags(newTags);
        inputRef.current.value = "";

        // Enter로 태그 추가되었을 때도 onBlur 호출 (유효성 갱신)
        onBlur?.({ target: { name, value: newTags } });
      }
    }
  };

  const handleRemove = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);

    // 삭제 후에도 유효성 검사
    onBlur?.({ target: { name, value: newTags } });
  };

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        ref={inputRef}
        placeholder="태그 입력 후 Enter"
        className={inputClass}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          onBlur?.({ target: { name, value: tags } });
        }}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      {error && error.length > 0 && <p className={errorClass}>{error}</p>}
      <div className={tagContainerClass}>
        {tags.map((tag, idx) => (
          <div key={idx} className={tagClass}>
            #{tag}
            <button
              type="button"
              className={removeButtonClass}
              onClick={() => handleRemove(tag)}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
