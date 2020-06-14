import React from 'react';

//Styles
import { Container, Wrapper } from './styles';

//Icons
import { ReactComponent as NotFoundIcon } from '../../assets/icons/research.svg';

//Atoms
import H1 from '../../components/atoms/Text/h1';
import P from '../../components/atoms/Text/p';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Container>
        <NotFoundIcon width={80} height={80} />
        <H1 size="100px" weight="600" marginBottom="10px">
          404
        </H1>
        <P>
          Parece que la página a la que intentas acceder, no está disponible.
        </P>
      </Container>
    </Wrapper>
  );
};

export default NotFoundPage;
