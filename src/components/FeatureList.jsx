import styled from 'styled-components';
import FeatureDescription from './FeatureDescription';
import { FEATURES_DATA as featureList } from '../data/featureData';

const FeatureListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 52px 0 84px 0;

  @media (min-width: 768px) {
    padding: 24px 0 56px 0;
  }

  @media (min-width: 1200px) {
    width: 988px;
    gap: 280px;
    margin: 0 auto;
    padding: 140px 0;
  }
`;

const FeatureList = () => {
  return (
    <FeatureListWrapper>
      {featureList.map((e) => (
        <FeatureDescription
          key={e.title}
          img={e.img}
          alt={e.alt}
          title={e.title}
          subtitle={e.subtitle}
          detail={e.detail}
        />
      ))}
    </FeatureListWrapper>
  );
};

export default FeatureList;
