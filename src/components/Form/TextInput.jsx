import { useState } from "react";
import Button from "../Button/Button";
import styles from './TextInput.module.css'

export default function TextInput () {
  const [isValid, setIsValid] = useState(false)
  const [value,setValue] = useState('')
  const [message,setMessage] = useState('')

  const handleTextareaChange = (event) => {
    const v = event.target.value;
    setValue(v);
   
    if (v.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setMessage('내용을 입력해주세요.')
    }
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      setMessage('로그인 후 이용 부탁드립니다.')
    } else {
      setMessage('로그인 후 이용 부탁드립니다.')
    }
  };

  return (<>
  <form onSubmit={handleSubmit} className={styles.container}>
    <div className={styles.inquire}>
      <label htmlFor="inquire">문의하기</label>
    <textarea className={message && styles.red} id="inquire" name="inquire" value={value} onChange={handleTextareaChange}  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."/>
    </div>
    <div className={styles.submit}>
      <div>
        {message && <span className={styles.message}>{message}</span>}
      </div>
      <Button buttonText={'등록'} disabled={!isValid} type={'submit'}/>
    </div>
  </form>
  </>)
}