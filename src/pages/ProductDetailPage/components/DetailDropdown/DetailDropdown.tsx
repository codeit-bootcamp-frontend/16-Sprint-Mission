/** @jsxImportSource @emotion/react */
import Dropdown from "@components/Dropdown/Dropdown";
import KebabMenuIcon from "@assets/images/icons/ic_kebab.svg";
import {
  DropdownItemStyle,
  DropdownListStyle,
} from "@pages/ProductDetailPage/components/DetailDropdown/DetailDropdownStyle";

interface DetailDropdownProps {
  onEdit: () => void;
  onDelete: () => void;
}

const DetailDropdown = ({
  onEdit,
  onDelete,
  ...props
}: DetailDropdownProps) => {
  return (
    <Dropdown {...props}>
      <Dropdown.Trigger>
        <img src={KebabMenuIcon} alt="드랍다운 메뉴 아이콘" />
      </Dropdown.Trigger>
      <Dropdown.List css={DropdownListStyle}>
        <Dropdown.Item onClick={onEdit} css={DropdownItemStyle}>
          수정하기
        </Dropdown.Item>
        <Dropdown.Item onClick={onDelete} css={DropdownItemStyle}>
          삭제하기
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default DetailDropdown;
