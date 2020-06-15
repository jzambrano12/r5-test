import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

//Styles
import {
  Wrapper,
  Information,
  Review,
  ReviewDistance,
  ReviewerName,
} from './styles';

//Atoms
import P from '../../atoms/Text/p';
import Span from '../../atoms/Text/p';

const ReviewMolecule = ({ review, reviewerName, distanceTime, last }) => {
  return (
    <Wrapper last={last}>
      <Review>
        <P size="20px" color="#ababab" weight="600">
          {review}
        </P>
      </Review>
      <Information>
        <ReviewerName>
          <Span color="#001c1d" weight="600">
            {reviewerName}
          </Span>
        </ReviewerName>
        <ReviewDistance>
          <Span color="#ababab" weight="600">
            {formatDistanceToNow(new Date(distanceTime), {
              addSuffix: true,
              locale: es,
            })}
          </Span>
        </ReviewDistance>
      </Information>
    </Wrapper>
  );
};

export default ReviewMolecule;
