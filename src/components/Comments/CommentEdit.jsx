import { useState, useEffect } from "react"; 
import ProfileCard from "../ProfileCard/ProfileCard";
import Button from "../Button/Button"; 
import styles from './CommentEdit.module.css'

export default function CommentEdit ({ comment, onEditComplete }) {
  const {id, content, createdAt, writer} = comment;
  const [value, setValue] = useState(content);

  useEffect(() => {
    setValue(comment.content);
  }, [comment.content]);

  const handleTextareaChange = (e) => {
    setValue(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditComplete();
  };

  
  const handleCancel = () => {
    onEditComplete();
  };

  return(
    <form onSubmit={handleSubmit} className={styles.container}> 
      <label htmlFor={`edit-comment-${id}`}/>
      <textarea
        className={styles.textInput}
        id={`edit-comment-${id}`}
        value={value}
        onChange={handleTextareaChange}
      />
      <div className={styles.submitContainer}>
        <ProfileCard
          writer={writer}
          createdAt={createdAt}
        />
        <div className={styles.buttons}>
          <Button type="button" buttonText="취소" onClick={handleCancel} className={'cancel'}/>
          <Button type="submit" buttonText="수정 완료"/>
        </div>
      </div>
    </form>
  );
}