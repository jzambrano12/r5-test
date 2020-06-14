import styled from 'styled-components';

export const Image = styled.img`
  width: ${({ width }) => width || '0px'};
  height: ${({ height }) => height || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
`;
