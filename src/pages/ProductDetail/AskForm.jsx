import { useState } from 'react';
import styles from './styles/AskForm.module.css';

const formHeightByMethod = {
  POST: { height: '129px' },
  UPDATE: { height: '80px' },
};

const buttonByMethod = {
  POST: ({ notEmpty }) => <PostBtn notEmpty={notEmpty} />,
  UPDATE: ({ notEmpty, setIsEditNow }) => (
    <UpdateBtn notEmpty={notEmpty} setIsEditNow={setIsEditNow} />
  ),
};

export default function AskForm({
  placeholder,
  method,
  comment,
  setIsEditNow,
  children,
}) {
  const [value, setValue] = useState(comment||'');
  const notEmpty = value?.length || false;

  function handleChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    if (method === 'POST') alert('준비 중인 기능입니다(댓글 등록)');
    else if (method === 'UPDATE') alert('준비 중인 기능입니다(댓글 수정)');
    e.preventDefault();
  }

  return (
    <form className={styles.askForm} onSubmit={onSubmit}>
      <label>
        {children}
        <textarea
          onChange={handleChange}
          name="comment"
          id="comment"
          placeholder={placeholder}
          value={value}
          style={formHeightByMethod[method]}
        />
      </label>
      {buttonByMethod[method]({ notEmpty, setIsEditNow })}
    </form>
  );
}

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
