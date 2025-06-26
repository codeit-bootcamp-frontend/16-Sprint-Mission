import { useState } from 'react';
import styles from './styles/AskForm.module.css';

const formHeight = {
  POST: { height: '129px' },
  UPDATE: { height: '80px' },
};

function AskForm({ placeholder, method, comment, setIsEditNow, children }) {
  const [value, setValue] = useState(comment);
  const notEmpty = value?.length || false;

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    //이것도 그럼 useCallback이 낫나?  //[v]
    // 추후 메서드 다르게 받아서 수정, 등록 나눠서 보내기
    if (method === 'POST') alert('준비 중인 기능입니다(댓글 등록)');
    else if (method === 'UPDATE') alert('준비 중인 기능입니다(댓글 수정)');
    e.preventDefault();
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
          style={formHeight[method]}
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
