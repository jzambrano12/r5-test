import styled from 'styled-components';

export const deleteIconStyle = {
  fontSize: 30,
  color: '#dd4646',
  marginRight: 10,
};
export const editIconStyle = {
  fontSize: 30,
  color: '#1d1d1d',
};
export const Wrapper = styled.div`
  border-bottom: ${({ last }) => (last ? '0px' : '1.5px solid #001c1d')};
  margin-bottom: 50px;
  padding-bottom: 40px;
`;

export const Review = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.5s ease;
`;

export const Option = styled.div`
  cursor: pointer;
`;
export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ReviewerName = styled.div``;
export const ReviewDistance = styled.div``;
