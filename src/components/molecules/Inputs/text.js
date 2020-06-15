import React from 'react';

//styles
import { Wrapper, Input, InputContainer } from './styles';

//Atoms
import Span from '../../atoms/Text/span';

const InputTextMolecule = ({
  label,
  value,
  setValue,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  error,
  handleChange,
  ...props
}) => {
  return (
    <Wrapper
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <Span size="18px" weight="600">
        {label}
      </Span>
      <InputContainer>
        <Input
          error={error}
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          width={width}
          height={height}
          {...props}
        />
        {error && (
          <Span size="12px" color="red">
            {error}
          </Span>
        )}
      </InputContainer>
    </Wrapper>
  );
};

export default InputTextMolecule;
