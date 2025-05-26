import styles from "./Header.module.css";

function Header({ type, text }) {
  return (
    <div className={styles[type]}>
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
