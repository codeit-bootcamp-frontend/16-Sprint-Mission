import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import DropDownItems from "./DropDownItems";
import styles from './EditDropDown.module.css'

const DROP_DOWN_OPTION = [
  { value: "edit", label: "수정하기" },
  { value: "delete", label: "삭제하기" },
];

export default function EditDropDown({onDelete, onEdit}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  const handleOnChangeValue = (value, label) => {
    if (value === 'edit') onEdit()
    else onDelete();
    setIsOpen(false);
  };

  return( 
  <div onClick={handleToggle}>
    <div className={styles.button}><HiDotsVertical /></div>
    {isOpen && <DropDownItems className={'commentDropDown'} onItemClick={handleOnChangeValue} option={DROP_DOWN_OPTION}/>}
  </div>
  )
}