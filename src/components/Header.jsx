import styles from "./Header.module.css";

function Header({ text }) {
  return (
    <div className={styles.header}>
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
