import styled from 'styled-components';

export const Button = styled.button`
  font-family: Barlow;
  font-size: ${({ size }) => size || '12px'};
  width: ${({ width }) => width || '0px'};
  height: ${({ height }) => height || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: 0;
  color: white;
  font-weight: 600;
  background-color: #001c1d;
  border-radius: 36px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }
`;
