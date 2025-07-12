/** @jsxImportSource @emotion/react */
import { defaultInput } from "../../styles/mixins";
import { ChangeEvent, TextareaHTMLAttributes } from "react";
import styled from "@emotion/styled/macro";

interface TextAreaStyleProps {
  height?: number;
}

interface BaseTextAreaProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  BaseTextAreaProps &
  TextAreaStyleProps;

const TextArea = ({ name, value, onChange, ...props }: TextAreaProps) => {
  return (
    <TextAreaStyle
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

const TextAreaStyle = styled.textarea<TextAreaStyleProps>`
  ${defaultInput()}
  height: ${({ height }) => (height !== undefined ? height : 104)}px;
  padding: 16px 24px;
  border: none;
  resize: none;
`;

export default TextArea;
