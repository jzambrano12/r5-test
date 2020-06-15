import styled from 'styled-components';

export const checkIconStyle = {
  fontSize: 35,
  color: '#46dd82',
  marginRight: 10,
};

export const deleteIconStyle = {
  fontSize: 35,
  color: '#dd4646',
};
export const editIconStyle = {
  fontSize: 35,
  marginRight: 15,
  color: '#1d1d1d',
};
export const Wrapper = styled.div`
  border-bottom: ${({ last }) => (last ? '0px' : '1.5px solid #001c1d')};
  margin-bottom: 50px;
  padding-bottom: 40px;
`;

export const Review = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.5s ease;
  margin-left: 20px;
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
