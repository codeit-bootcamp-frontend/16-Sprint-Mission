import { useState } from 'react';
import styles from './styles/AskForm.module.css';

const METHOD = {
  POST: 'POST',
  UPDATE: 'UPDATE',
};

const FORM_HEIGHT_BY_METHOD = {
  // POST: { height: '129px' },
  // UPDATE: { height: '80px' },  지금은 그냥 이렇게 UPDATE라고만 키 줘도 되는데 나중에 METHOD객체 값이 바뀔 걸 대비
  [METHOD.POST]: { height: '129px' },
  [METHOD.UPDATE]: { height: '80px' },
};

function renderButton(method, { notEmpty, setIsEditNow }) {
  switch (method) {
    case METHOD.POST:
      return <PostBtn notEmpty={notEmpty} />;
    case METHOD.UPDATE:
      return <UpdateBtn notEmpty={notEmpty} setIsEditNow={setIsEditNow} />;
    default:
      return null;
  }
}

export default function AskForm({
  placeholder,
  method,
  comment,
  setIsEditNow,
  children,
}) {
  const [value, setValue] = useState(comment || '');
  const notEmpty = value?.length || false;

  function handleChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    if (method === METHOD.POST) alert('준비 중인 기능입니다(댓글 등록)');
    else if (method === METHOD.UPDATE) alert('준비 중인 기능입니다(댓글 수정)');
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
          style={FORM_HEIGHT_BY_METHOD[method]}
        />
      </label>
      {renderButton(method, { notEmpty, setIsEditNow })}
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
