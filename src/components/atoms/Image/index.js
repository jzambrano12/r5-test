import React from 'react';
import { Image } from './styles';

const ImageAtom = ({
  src,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  return (
    <Image
      src={src}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  );
};

export default ImageAtom;
