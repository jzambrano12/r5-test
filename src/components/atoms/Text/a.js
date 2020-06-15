import React from 'react';
import { A } from './styles';
import { useHistory } from 'react-router-dom';

const AAtom = ({
  size,
  color,
  weight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  children,
  href,
}) => {
  const history = useHistory();
  return (
    <A
      onClick={() => history.push(href)}
      size={size}
      color={color}
      weight={weight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </A>
  );
};

export default AAtom;
