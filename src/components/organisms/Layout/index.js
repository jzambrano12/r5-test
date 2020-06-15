import React from 'react';

//Recoil Atom

//Styles
import {
  Wrapper,
  Header,
  Container,
  Body,
  FormContainer,
  Input,
  Adornment,
} from './styles';

//Atoms
import Span from '../../atoms/Text/span';
import H1 from '../../atoms/Text/h1';
import A from '../../atoms/Text/a';

//Icons
import SearchIcon from '@material-ui/icons/Search';

const LayoutOrganism = ({
  children,
  withSearch,
  searchTerm,
  setSearchTerm,
  withOutLink,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <H1 size="35px">
            Google{' '}
            <Span weight="900" size="35px">
              BOOKS
            </Span>
          </H1>
          {!withOutLink && (
            <A size="14px" marginTop="10px" href="/search">
              Ver todas las reseñas
            </A>
          )}
          {withSearch && (
            <FormContainer>
              <Input
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
                placeholder={placeholder || 'Buscar libro ...'}
                InputProps={{
                  startAdornment: (
                    <Adornment position="start">
                      <SearchIcon />
                    </Adornment>
                  ),
                }}
              />
            </FormContainer>
          )}
        </Header>
        <Body>{children}</Body>
      </Container>
    </Wrapper>
  );
};

export default LayoutOrganism;
