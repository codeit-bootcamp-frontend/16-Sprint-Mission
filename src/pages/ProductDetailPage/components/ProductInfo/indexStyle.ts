import styled from "@emotion/styled/macro";
import { mq } from "../../../../styles/mixins";

export const DetailInfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--gray200);
  padding-bottom: 40px;

  ${mq["tablet"]} {
    gap: 16px;
    padding-bottom: 32px;
  }
  ${mq["mobile"]} {
    display: block;
    margin-bottom: 24px;
    padding-bottom: 24px;
  }
`;

export const DetailInfoImg = styled.figure`
  width: 486px;
  aspect-ratio: 1/1;
  flex: 0 0 auto;
  border-radius: 16px;
  overflow: hidden;

  ${mq["tablet"]} {
    width: 340px;
  }
  ${mq["mobile"]} {
    margin-bottom: 16px;
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailInfoText = styled.div`
  flex: 1;
`;
