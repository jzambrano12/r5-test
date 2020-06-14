import React from 'react';
import { P } from './styles';

const PAtom = ({
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
    <P
      size={size}
      color={color}
      weight={weight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </P>
  );
};

export default PAtom;
