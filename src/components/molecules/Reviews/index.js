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
  checkIconStyle,
  editIconStyle,
} from './styles';

//Atoms
import P from '../../atoms/Text/p';
import Span from '../../atoms/Text/p';

//Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

//Utils
import InputTextArea from '../Inputs/text-area';
import { useLocalStorage } from 'react-use';
import { indexOf } from 'ramda';
import { useHistory } from 'react-router-dom';
import ConfirmationModal from '../../organisms/Modal/confirmation';

const ReviewMolecule = ({ review, reviewerName, distanceTime, last, item }) => {
  const { go } = useHistory();
  const [reviews, setReviews] = useLocalStorage('reviews', []);
  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newReview, setNewReview] = useState(review);
  const [openModal, setOpenModal] = useState({ status: false, reviewId: '' });

  const handleDeleteReview = (reviewId) => {
    const validation = reviews.map((x) => x.id === reviewId);
    if (validation.includes(true)) {
      setReviews(reviews.filter((review) => review.id !== reviewId));
    } else {
      alert('El review que intentas eliminar, ya no existe.');
    }
    setOpenModal({ status: false, reviewId: '' });
    go();
  };

  const handleEditReview = (item) => {
    const index = indexOf(item, reviews);
    const reviewEdited = { ...item, review: newReview };

    if (index === -1) {
      return;
    }
    const result = [
      ...reviews.slice(0, index),
      reviewEdited,
      ...reviews.slice(index + 1),
    ];

    setReviews(result);
    setIsEditing(false);
    go();
  };

  return (
    <Wrapper
      last={last}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <Review>
        {isEditing ? (
          <InputTextArea
            value={newReview}
            name="review"
            handleChange={(value) => setNewReview(value)}
            width="100%"
            height="100px"
          />
        ) : (
          <P size="20px" color="#ababab" weight="600">
            {review}
          </P>
        )}
        <OptionsContainer show={showOptions}>
          {isEditing ? (
            <>
              <Option onClick={() => handleEditReview(item)}>
                <CheckIcon style={checkIconStyle} />
              </Option>
              <Option onClick={() => setIsEditing(false)}>
                <CancelIcon style={deleteIconStyle} />
              </Option>
            </>
          ) : (
            <>
              <Option onClick={() => setIsEditing(true)}>
                <EditIcon style={editIconStyle} />
              </Option>
              <Option
                onClick={() =>
                  setOpenModal({ status: true, reviewId: item.id })
                }
              >
                <DeleteIcon style={deleteIconStyle} />
              </Option>
            </>
          )}
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
      <ConfirmationModal
        reviewId={openModal.reviewId}
        open={openModal.status}
        handleClose={() => setOpenModal({ status: false, reviewId: '' })}
        handleAction={(value) => handleDeleteReview(value)}
      />
    </Wrapper>
  );
};

export default ReviewMolecule;
