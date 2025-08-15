import PlusIcon from "@/assets/icons/PlusIcon.svg";
import DeleteIcon from "@/assets/icons/DeleteIcon.svg";
import CheckIcon from "@/assets/icons/CheckIcon.svg";

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
