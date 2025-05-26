import styles from "./Button.module.css";

function Button({ href, buttonText, type }) {
  return (
    <a className={styles[type]} href={href}>
      {buttonText}
    </a>
  );
}

export default Button;
