import styled, { css } from 'styled-components';

const commonTextStyle = css`
  font-family: Barlow;
  font-size: ${({ size }) => size || '12px'};
  color: ${({ color }) => color || '#011d18'};
  font-weight: ${({ weight }) => weight || '400'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
`;

export const H1 = styled.h1`
  ${commonTextStyle};
  font-size: ${({ size }) => size || '45px'};
`;
export const H2 = styled.h2`
  ${commonTextStyle};
  font-size: ${({ size }) => size || '25px'};
`;
export const P = styled.p`
  ${commonTextStyle};
  font-size: ${({ size }) => size || '16px'};
`;
export const Span = styled.span`
  ${commonTextStyle};
`;
export const A = styled.a`
  ${commonTextStyle};
  cursor: pointer;
  text-decoration: underline;
`;
