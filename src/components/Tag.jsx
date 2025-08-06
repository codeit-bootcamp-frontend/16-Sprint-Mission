import styled from 'styled-components';

import closeBtn from '../assets/closeBtn.png';
export default function Tag({ children, id, deleteTagHandler }) {
  const onDeleteTag = () => {
    deleteTagHandler(id);
  };
  return (
    <TagWrapper id={id}>
      #{children}
      <DelBtn onClick={onDeleteTag} src={closeBtn} />
    </TagWrapper>
  );
}
const TagWrapper = styled.div`
  display: flex;
  height: 36px;
  border-radius: 26px;
  background-color: #f3f4f6;
  font-size: 16px;
  padding: 5px 12px 5px 16px;
  align-items: center;
`;
const DelBtn = styled.img`
  width: 22px;
  height: 24px;
  margin-left: 8px;
`;
