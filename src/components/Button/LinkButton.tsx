import { ButtonStyleProps, LinkStyle } from "@components/Button/ButtonStyle";
import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

interface BaseProps {
  children: ReactNode;
}

type Props = LinkProps & BaseProps & ButtonStyleProps;

const LinkButton = ({ children, to, ...rest }: Props) => {
  return (
    <LinkStyle to={to} {...rest}>
      {children}
    </LinkStyle>
  );
};

export default LinkButton;
