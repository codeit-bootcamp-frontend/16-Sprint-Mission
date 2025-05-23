import styles from "./Button.module.css";

function Button({ href, buttonText }) {
  return (
    <a className={styles.button} href={href}>
      {buttonText}
    </a>
  );
}

export default Button;
