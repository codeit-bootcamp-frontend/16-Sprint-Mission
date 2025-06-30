import defaultProfileImg from '../../assets/input/default_profile.svg'
import { useDate, useDateNow } from '../../utils/useDate'
import styles from './ProfileCard.module.css'

export default function ProfileCard ({ ownerNickname, createdAt , writer}) {
    const newDate = useDateNow(createdAt)
    const date = useDate(createdAt)

  return(
    <>
    <div className={styles.profileCard}>
      <img src={defaultProfileImg} alt="프로필 이미지" />
      <div className={styles.profileText}>
        <span className={styles.nickname}>{writer ? writer.nickname : ownerNickname}</span>
        <p className={styles.date}>{writer ? newDate : date}</p>
      </div>
    </div>
    </>
  )
}