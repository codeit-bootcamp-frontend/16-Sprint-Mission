import { Menu } from "@headlessui/react";
import styled from "styled-components";

export default function DropdownSort({ order, setOrder }) {
  return (
    <Menu as="div" style={{ position: "relative" }}>
      <Menu.Button as={DropdownButton}>
        {order === "recent" ? "최신순" : "좋아요순"}
      </Menu.Button>
      <Menu.Items
        style={{
          position: "absolute",
          right: 0,
          marginTop: "8px",
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <MenuItem as="div" onClick={() => setOrder("recent")}>
          최신순
        </MenuItem>
        <MenuItem as="div" onClick={() => setOrder("favorite")}>
          좋아요순
        </MenuItem>
      </Menu.Items>
    </Menu>
  );
}

const DropdownButton = styled.button`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 16px;
  width: 130px;
`;

const MenuItem = styled(Menu.Item)`
  display: block;
  padding: 10px 16px;
  font-size: 16px;
  background-color: white;
  color: #1f2937;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const MobileOnly = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopOnly = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
