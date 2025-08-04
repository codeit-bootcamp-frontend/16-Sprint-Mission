import { ReactNode } from "react";
import { css } from "@emotion/react";
import { useDropdownContext } from "@components/Dropdown/DropdownContext";
import styled from "@emotion/styled/macro";

interface StyleProps {
  direction?: "left" | "right";
}

interface BaseProps {
  children: ReactNode;
}

type DropdownListProps = BaseProps & StyleProps;

const DropdownList = ({ children, ...props }: DropdownListProps) => {
  const { isOpen } = useDropdownContext();

  return (
    <>
      {isOpen && <DropdownListStyle {...props}>{children}</DropdownListStyle>}
    </>
  );
};

const DirectionStyle = {
  right: css`
    right: 0;
  `,
  left: css`
    left: 0;
  `,
};

const DIRECTION_DEFAULT = "right";

const DirectionBaseStyle = (prop: StyleProps) => {
  const direction = prop.direction ? prop.direction : DIRECTION_DEFAULT;

  return css`
    ${DirectionStyle[direction]}
  `;
};

const DropdownListStyle = styled.ul<StyleProps>`
  position: absolute;
  top: 100%;
  ${(props) => DirectionBaseStyle(props)}
`;

export default DropdownList;
