import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`;

export const ReviewsSaved = styled.div`
  margin-bottom: 50px;
`;
export const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ReviewsContainer = styled.div`
  width: 80%;
  padding: 16px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
