import React from 'react';
import {
  Wrapper,
  ImageContainer,
  InfoContainer,
  AverageContainer,
} from './styles';

//Atoms
import Image from '../../atoms/Image';
import Span from '../../atoms/Text/span';
import H2 from '../../atoms/Text/h2';
import P from '../../atoms/Text/p';
import { useMedia } from 'react-use';

//Utils
import { useHistory } from 'react-router-dom';

//Icons
import StarRate from '@material-ui/icons/StarRate';

const BookItemOrganism = ({
  withDescription,
  imageWidth,
  imageHeight,
  imageSrc,
  bookReviewsAverage,
  bookDescription,
  bookTitle,
  bookAuthor,
  onViewVolume,
  id,
}) => {
  const isTablet = useMedia('(max-width: 760px)');
  const history = useHistory();
  return (
    <Wrapper
      onViewVolume={onViewVolume}
      onClick={() => !onViewVolume && history.push(`/volume/${id}`)}
    >
      <ImageContainer width={imageWidth} height={imageHeight}>
        <Image src={imageSrc} />
      </ImageContainer>
      <InfoContainer onViewVolume={onViewVolume}>
        <AverageContainer>
          <StarRate style={{ color: '#fff280', fontSize: 30 }} />
          <Span
            size={isTablet ? '15px' : '20px'}
            color="#ababab"
            weight="600"
            marginBottom="10px"
          >
            {bookReviewsAverage}
          </Span>
        </AverageContainer>
        <H2 size={isTablet ? '20px' : '30px'} weight="600" marginBottom="10px">
          {bookTitle}
        </H2>
        <P
          size={isTablet ? '15px' : '20px'}
          color="#ababab"
          weight="600"
          marginBottom="10px"
        >
          {bookAuthor}
        </P>
        {withDescription && (
          <P color="#ababab" weight="400">
            {bookDescription}
          </P>
        )}
      </InfoContainer>
    </Wrapper>
  );
};

export default BookItemOrganism;
