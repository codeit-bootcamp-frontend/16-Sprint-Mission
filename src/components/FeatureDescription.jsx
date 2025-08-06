import styled from 'styled-components';

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  &:nth-child(2n) {
    align-items: flex-end;
    text-align: right;
  }

  &:nth-child(2n) p {
    align-self: flex-end;
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
    background-color: #fcfcfc;
    border-radius: 12px;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
    }

    &:nth-child(2n) > div {
      padding-left: 24px;
      padding-right: 64px;
    }
  }
`;

const FeatureImg = styled.img`
  @media (min-width: 1200px) {
    width: 588px;
  }
`;

const FeatureTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    gap: 8px;
    padding-left: 64px;
    padding-right: 24px;
  }
`;

const FeatureHeading = styled.h1`
  margin-top: 24px;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primary100};
`;

const FeatureSubHeading = styled.h2`
  margin-top: 8px;
  font-size: 1.5em;
`;

const FeatureDetail = styled.p`
  width: 66%;
  margin-top: 16px;
  font-size: 1em;

  @media (min-width: 1200px) {
    width: auto;
  }
`;

const FeatureDescription = ({ img, title, subtitle, detail }) => {
  return (
    <FeatureWrapper>
      <FeatureImg src={img} width={'100%'} height={'auto'} />
      <FeatureTextBox>
        <FeatureHeading>{title}</FeatureHeading>
        <FeatureSubHeading>{subtitle}</FeatureSubHeading>
        <FeatureDetail>{detail}</FeatureDetail>
      </FeatureTextBox>
    </FeatureWrapper>
  );
};

export default FeatureDescription;
