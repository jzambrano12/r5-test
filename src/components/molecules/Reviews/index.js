import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

//Styles
import {
  Wrapper,
  Information,
  Review,
  ReviewDistance,
  ReviewerName,
  OptionsContainer,
  Option,
  deleteIconStyle,
  editIconStyle,
} from './styles';

//Atoms
import P from '../../atoms/Text/p';
import Span from '../../atoms/Text/p';

//Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ReviewMolecule = ({
  review,
  reviewId,
  reviewerName,
  distanceTime,
  last,
  handleDelete,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <Wrapper
      last={last}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <Review>
        <P size="20px" color="#ababab" weight="600">
          {review}
        </P>
        <OptionsContainer show={showOptions}>
          <Option onClick={() => handleDelete(reviewId)}>
            <DeleteIcon style={deleteIconStyle} />
          </Option>
          <Option>
            <EditIcon style={editIconStyle} />
          </Option>
        </OptionsContainer>
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
