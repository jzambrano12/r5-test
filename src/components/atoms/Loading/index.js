import React from 'react';
import { LoadingContainer } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingAtom = ({ size }) => {
  return (
    <LoadingContainer>
      <CircularProgress color="red" />
    </LoadingContainer>
  );
};

export default LoadingAtom;
