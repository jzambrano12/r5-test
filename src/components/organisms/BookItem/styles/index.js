import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-bottom: 80px;
  max-height: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.05);
  }
`;
export const ImageContainer = styled.div``;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
