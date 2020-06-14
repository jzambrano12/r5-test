import React from 'react';
import { Image } from './styles';

const ImageAtom = ({
  src,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  height,
}) => {
  return (
    <Image
      src={src}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      height={height}
    />
  );
};

export default ImageAtom;
