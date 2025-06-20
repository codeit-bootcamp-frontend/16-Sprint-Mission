import kebabIcon from "@/assets/images/ic_kebab.svg";

const KebabButton = ({ onClick, alt }) => {
  return (
    <button type="button" className="kebab-btn" onClick={onClick}>
      <img src={kebabIcon} alt={alt} />
    </button>
  );
};

export default KebabButton;
