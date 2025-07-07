import styles from './Tags.module.css'

export default function Tags({tags}) {
  return (<div className={styles.tags}>
  {tags.map((tag,i) =>
  <div key={i}>
    <p className={styles.tag}>#{tag}</p>
  </div>)}
  </div >)}