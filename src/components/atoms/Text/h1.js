import React from 'react';
import { H1 } from './styles';

const H1Atom = ({
  size,
  color,
  weight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  children,
}) => {
  return (
    <H1
      size={size}
      color={color}
      weight={weight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </H1>
  );
};

export default H1Atom;
