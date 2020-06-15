import React from 'react';

//styles
import { Button } from './styles';

const ButtonAtom = ({
  children,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  size,
  disabled,
  ...props
}) => {
  return (
    <Button
      size={size}
      marginTop={marginTop}
      width={width}
      height={height}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonAtom;
