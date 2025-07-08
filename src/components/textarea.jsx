import { styled } from "styled-components";

function Textarea({ placeholder, onChange, height }) {
  return (
    <MyTextArea placeholder={placeholder} height={height} onChange={onChange} />
  );
}

export default Textarea;

const MyTextArea = styled.textarea`
  height: ${(props) => props.height};
  padding: 16px 24px;
  font-family: "PretendardVariable";
  background-color: var(--gray-100);
  border: 0;
  border-radius: 12px;
  resize: none;
  font-size: 16px;
`;
