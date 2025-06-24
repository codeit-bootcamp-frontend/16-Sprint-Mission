import styles from '@styles/SkeletonUi.module.css';

function SkeletonUi({ className }) {
  return (
    <div className={`${styles.skeleton} ${className}`}>
      <div />
      <h2 />
      <h2 />
      <p />
    </div>
  );
}

export default SkeletonUi;
