import React from 'react';
import { Wrapper, ImageContainer, InfoContainer } from './styles';

//Atoms
import Image from '../../atoms/Image';
import Span from '../../atoms/Text/span';
import H2 from '../../atoms/Text/h2';
import P from '../../atoms/Text/p';
import { useMedia } from 'react-use';

const BookItemOrganism = ({
  withDescription,
  imageWidth,
  imageHeight,
  imageSrc,
  bookReviewsAverage,
  bookDescription,
  bookTitle,
  bookAuthor,
}) => {
  const isTablet = useMedia('(max-width: 760px)');
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imageSrc} width={imageWidth} height={imageHeight} />
      </ImageContainer>
      <InfoContainer>
        <Span
          size={isTablet ? '15px' : '20px'}
          color="#ababab"
          weight="600"
          marginBottom="10px"
        >
          {bookReviewsAverage}
        </Span>
        <H2 size={isTablet ? '20px' : '30px'} weight="600" marginBottom="10px">
          {bookTitle}
        </H2>
        <P size={isTablet ? '15px' : '20px'} color="#ababab">
          {bookAuthor}
        </P>
        {withDescription && <P>{bookDescription}</P>}
      </InfoContainer>
    </Wrapper>
  );
};

export default BookItemOrganism;
