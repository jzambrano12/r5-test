import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div`
  text-align: center;
  width: 20%;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
