import styled, { css } from 'styled-components';

const commonInputStyle = css`
  font-family: Barlow;
  padding-left: 16px;
  font-size: 18px;
  margin-top: 10px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '45px'};
  border: ${({ error }) => (error ? '2px solid red' : '2px solid #001c1d')};
  border-radius: 5px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 28, 29, 0.25);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
`;
export const InputContainer = styled.div``;
export const Input = styled.input`
  ${commonInputStyle};
`;
export const InputArea = styled.textarea`
  ${commonInputStyle};
  padding-top: 16px;

  resize: none;
`;
