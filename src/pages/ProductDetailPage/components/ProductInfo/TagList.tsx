import TagItem from "@components/TagItem/TagItem";
import styled from "@emotion/styled/macro";

interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => {
  return (
    <TagListStyle>
      {tags.map((tag, id) => (
        <TagItem type="text" key={id}>
          {tag}
        </TagItem>
      ))}
    </TagListStyle>
  );
};

const TagListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default TagList;
