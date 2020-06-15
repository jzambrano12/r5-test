import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: ${({ last }) => (last ? '0px' : '1.5px solid #001c1d')};
  margin-bottom: 50px;
  padding-bottom: 40px;
`;

export const Review = styled.div`
  margin-bottom: 15px;
`;
export const Information = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ReviewerName = styled.div``;
export const ReviewDistance = styled.div``;
