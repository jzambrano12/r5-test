import styled from 'styled-components';

//MaterialUI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
export const Container = styled.div`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const Input = styled(TextField)`
  width: 100%;
  text-align: center;
`;
export const Adornment = styled(InputAdornment)``;
export const FormContainer = styled.div`
  width: 90%;
  max-width: 550px;
  margin-top: 40px;
`;
