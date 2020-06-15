import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ onViewVolume }) => (onViewVolume ? 'auto' : 'pointer')};
  transition: all 0.5s ease;
  margin-bottom: ${({ onViewVolume }) => (onViewVolume ? '0px' : '80px')};
  border-radius: 20px;
  width: ${({ onViewVolume }) => (onViewVolume ? '100%' : 'auto')};
  padding: 16px;

  &:hover {
    transform: ${({ onViewVolume }) =>
      onViewVolume ? 'none' : 'translateY(-5px)'};
    box-shadow: ${({ onViewVolume }) =>
      onViewVolume ? 'none' : '0px 10px 8px rgba(0, 0, 0, 0.05)'};
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  width: ${({ width }) => width || '0px'};
  height: ${({ height }) => height || '0px'};
  min-height: 350px;
  min-width: 280px;
  max-width: 280px;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 70%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;
  width: ${({ onViewVolume }) => (onViewVolume ? 'auto' : '300px')};

  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    padding-bottom: 20px;
  }

  @media (max-width: 520px) {
    margin-left: 0px;
  }
`;

export const AverageContainer = styled.div`
  display: flex;
`;
