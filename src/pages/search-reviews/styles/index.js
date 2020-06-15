import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  margin-top: 60px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 40px;
  }

  @media (max-width: 520px) {
    width: 90%;
    margin-top: 30px;
  }

  @media (max-width: 420px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const NoMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
