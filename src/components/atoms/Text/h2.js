import React from 'react';
import { H2 } from './styles';

const H2Atom = ({
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
    <H2
      size={size}
      color={color}
      weight={weight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </H2>
  );
};

export default H2Atom;
