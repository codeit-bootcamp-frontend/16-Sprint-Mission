import "./css/HeartButton.css";
import HeartIcon from "./HeartIcon";

const HeartButton = ({
  className,
  size,
  children,
  isLiked,
  onClick = () => {},
}) => {
  const btnStyleClass = {
    small: "heart__btn-small",
    large: "heart__btn-large",
  };

  const btnClassName = `heart__btn ${btnStyleClass[size] || ""} ${className}`;

  const onClickButton = () => {
    onClick();
  };

  return (
    <button type="button" className={btnClassName} onClick={onClickButton}>
      <HeartIcon width={32} isLiked={isLiked} />
      <span className="heart__btn__text">{children}</span>
    </button>
  );
};

export default HeartButton;
