import styled from 'styled-components';

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 40px auto;
  border: 4px solid ${({ theme }) => theme.colors.gray200};
  border-top: 4px solid ${({ theme }) => theme.colors.primary100};
  border-radius: 9999px;
  animation: spin 1.2s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingIndicator = () => {
  return <Spinner />;
};

export default LoadingIndicator;
