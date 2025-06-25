import React, { useState } from 'react';
import styles from './styles/AskForm.module.css';
import { postComment } from '../../service/api';

function AskForm({
  placeholder,
  productId,
  method,
  comment,
  setIsEditNow,
  children,
}) {
  const [value, setValue] = useState(comment);
  const notEmpty = value?.length || false;

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e, method) {
    // e.preventDefault();
    // async function sendPost() {
    //   await postComment({ method, productId, value });
    // }
    // sendPost();
    alert('준비 중인 기능입니다')
  }

  return (
    <form className={styles.askForm} onSubmit={handleSubmit}>
      <label>
        {children}
        <textarea
          onChange={handleChange}
          name="comment"
          id="comment"
          placeholder={placeholder}
          value={value}
        />
      </label>
      {method === 'POST' ? (
        <PostBtn notEmpty={notEmpty} />
      ) : (
        <UpdateBtn notEmpty={notEmpty} setIsEditNow={setIsEditNow} />
      )}
    </form>
  );
}

export default AskForm;

function PostBtn({ notEmpty }) {
  return (
    <button
      type="submit"
      className={notEmpty ? styles.isActive : null}
      disabled={!notEmpty}
    >
      등록
    </button>
  );
}

function UpdateBtn({ notEmpty, setIsEditNow }) {
  return (
    <div className={styles.updateBtn}>
      <button type="button" onClick={() => setIsEditNow(false)}>
        취소
      </button>
      <button
        type="submit"
        className={notEmpty ? styles.isActive : null}
        disabled={!notEmpty}
      >
        수정완료
      </button>
    </div>
  );
}
