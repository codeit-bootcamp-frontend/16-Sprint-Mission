import PlusIcon from "/public/images/PlusIcon.svg";
import DeleteIcon from "/public/images/DeleteIcon.svg";
import CheckIcon from "/public/images/CheckIcon.svg";

const ICONS_TYPE = {
  add: PlusIcon,
  delete: DeleteIcon,
  edit: CheckIcon,
};

interface Props {
  type: keyof typeof ICONS_TYPE;
}

const ButtonIcon = ({ type }: Props) => {
  const Icon = ICONS_TYPE[type];

  return <Icon width={16} height={16} />;
};

export default ButtonIcon;
