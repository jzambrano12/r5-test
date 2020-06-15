import React from 'react';

//styles
import { Wrapper, InputContainer, InputArea } from './styles';

//Atoms
import Span from '../../atoms/Text/span';

const InputTextAreaMolecule = ({
  label,
  value,
  setValue,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  handleChange,
  error,
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
        <InputArea
          error={error}
          cols="30"
          value={value}
          width={width}
          height={height}
          onChange={(event) => handleChange(event.target.value)}
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

export default InputTextAreaMolecule;
