import { useDateNow } from "../../utils/useDate"
import EditDropDown from "../DropDown/EditDropDown"
import ProfileCard from "../ProfileCard/ProfileCard"
import styles from './Comment.module.css'

export default function Comment ({comment, onEdit, onDelete}) {
  const {id, content, createdAt, updatedAt, writer} = comment;
  const date = useDateNow(createdAt);

  return (
    <div>
      <div className={styles.commentContainer}>
        <p>{content}</p>
        <EditDropDown
          onEdit={() => onEdit(id)} 
          onDelete={() => onDelete(id)} 
        />
      </div>
      <ProfileCard createdAt={createdAt} writer={writer}/>
      <div className={styles.line}></div>
    </div>
  )
}