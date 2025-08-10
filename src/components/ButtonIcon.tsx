import PlusIcon from "/public/images/PlusIcon.svg";
import DeleteIcon from "/public/images/DeleteIcon.svg";
import CheckIcon from "/public/images/CheckIcon.svg";

const ICONS_TYPE = {
  plus: PlusIcon,
  delete: DeleteIcon,
  check: CheckIcon,
};

interface Props {
  type: keyof typeof ICONS_TYPE;
  className?: string;
}

const ButtonIcon = ({ type, className }: Props) => {
  const Icon = ICONS_TYPE[type];

  return <Icon width={16} height={16} className={className} />;
};

export default ButtonIcon;
