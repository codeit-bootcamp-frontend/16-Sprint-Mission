import { styled } from "styled-components";
import { ReactComponent as CloseButton } from "../../public/components/ic_X.svg";

function TagList({ tags, deleteTag }) {
  return (
    <TagComponent>
      {tags &&
        tags.map((el) => (
          <SingleTag key={el.id}>
            #{el.tagName}
            <CloseButton onClick={() => deleteTag(el.id)} />
          </SingleTag>
        ))}
    </TagComponent>
  );
}

export default TagList;

const TagComponent = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
`;

const SingleTag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background-color: var(--gray-100);
  border-radius: 26px;
`;
