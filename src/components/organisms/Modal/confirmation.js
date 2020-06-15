import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

//Styles
import { Wrapper, Container, InfoContainer, ActionsContainer } from './styles';

//Atoms
import H2 from '../../atoms/Text/h2';

const ConfirmationModalOrganism = ({
  open,
  handleClose,
  reviewId,
  handleAction,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Wrapper>
          <Container>
            <InfoContainer>
              <H2 weight="600" size="20px">
                Realmente desea eliminar este elemento?
              </H2>
            </InfoContainer>
            <ActionsContainer>
              <Button color="secondary" onClick={() => handleAction(reviewId)}>
                Eliminar
              </Button>
              <Button onClick={handleClose}>Cerrar</Button>
            </ActionsContainer>
          </Container>
        </Wrapper>
      </Fade>
    </Modal>
  );
};

export default ConfirmationModalOrganism;
