import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { mq } from "@styles/mixins";

export const BackLinkRow = styled.div`
  margin-top: 64px;
  text-align: center;

  ${mq["tablet"]} {
    margin-top: 56px;
  }
  ${mq["mobile"]} {
    margin-top: 40px;
  }
`;

export const BackButtonCustom = css`
  display: inline-flex;
  align-items: center;
  min-width: 240px;
  height: 48px;
  gap: 8px;
  border-radius: 40px;
`;
