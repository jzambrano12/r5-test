import React from 'react';
import { Span } from './styles';

const SpanAtom = ({
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
    <Span
      size={size}
      color={color}
      weight={weight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </Span>
  );
};

export default SpanAtom;
