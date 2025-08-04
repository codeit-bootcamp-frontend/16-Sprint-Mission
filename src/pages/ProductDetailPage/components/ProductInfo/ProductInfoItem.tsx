import styled from "@emotion/styled/macro";
import { mq } from "@styles/mixins";
import { theme } from "@styles/theme";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const ProductInfoItem = ({ title, children }: Props) => {
  return (
    <InfoItem>
      <h3 className="subject">{title}</h3>
      {children}
    </InfoItem>
  );
};

const InfoItem = styled.div`
  margin-bottom: 24px;

  .subject {
    margin-bottom: 16px;
    font-weight: 600;
    color: ${theme.colors.gray600};

    ${mq["tablet"]} {
      margin-bottom: 8px;
      font-size: 14px;
    }
  }

  .desc {
    color: ${theme.colors.gray600};
    white-space: pre-line;
  }
`;

export default ProductInfoItem;
