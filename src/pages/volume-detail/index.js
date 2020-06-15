import React, { useState, useEffect } from 'react';

//Utils
import { isEmpty, reverse } from 'ramda';
import { useFormik } from 'formik';
import { reviewInitialValues } from '../../utils/forms/initial-values';
import { reviewValidationSchema } from '../../utils/forms/validation-schema';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';

//React Router
import { useParams, useHistory } from 'react-router-dom';

//Styles
import {
  ProductContainer,
  ReviewsContainer,
  Wrapper,
  FormContainer,
  ReviewsSaved,
} from './styles';

//Atoms
import H2 from '../../components/atoms/Text/h2';
import Loading from '../../components/atoms/Loading';
import Button from '../../components/atoms/Button';

//Molecules
import InputText from '../../components/molecules/Inputs/text';
import InputTextArea from '../../components/molecules/Inputs/text-area';
import ReviewItem from '../../components/molecules/Reviews';

//Organism
import LayoutOrganism from '../../components/organisms/Layout';
import BookItem from '../../components/organisms/BookItem';
import ConfirmationModal from '../../components/organisms/Modal/confirmation';

//Hooks
import { useGetVolumeById } from '../../data/hooks/volumes';
import { useLocalStorage } from 'react-use';

const VolumeDetailPage = () => {
  const [openModal, setOpenModal] = useState({ status: false, reviewId: '' });
  const [reviews, setReviews] = useLocalStorage('reviews', []);
  const history = useHistory();
  const { volumeId } = useParams();
  const { data: volumeResponse, status: volumeStatus } = useGetVolumeById(
    volumeId
  );

  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues: reviewInitialValues,
    validationSchema: reviewValidationSchema,
    onSubmit: async (values, formikBag) => {
      setReviews([
        ...reviews,
        {
          id: uuidv4(),
          volume_id: volumeId,
          name: values.name,
          review: values.review,
          createdAt: Date.now(),
        },
      ]);
      formikBag.setSubmitting(false);
      formikBag.resetForm({ reviewInitialValues });
    },
  });

  useEffect(() => {
    if (volumeStatus === 'success') {
      if (volumeResponse.error) {
        return history.push('/404');
      }
    }
  }, [volumeResponse, volumeStatus, history]);

  const reviewsReversed = reverse(reviews);
  const reviewsFiltered = reviewsReversed.filter(
    (review) => review.volume_id === volumeId
  );

  const handleDeleteReview = (reviewId) => {
    const validation = reviewsFiltered.map((x) => x.id === reviewId);
    if (validation.includes(true)) {
      setReviews(reviews.filter((review) => review.id !== reviewId));
    } else {
      alert('El review que intentas eliminar, ya no existe.');
    }

    setOpenModal({ status: false, reviewId: '' });
  };

  return (
    <LayoutOrganism withSearch={false}>
      {volumeStatus === 'loading' ? (
        <Loading size={50} />
      ) : (
        <Wrapper>
          <ProductContainer>
            <BookItem
              onViewVolume
              imageHeight="auto"
              imageWidth="auto"
              withDescription
              bookDescription={parse(
                `${
                  volumeResponse?.volumeInfo?.description ?? 'Sin descripción'
                }`
              )}
              bookAuthor={
                volumeResponse?.volumeInfo?.authors?.[0] ?? 'Sin autor'
              }
              bookReviewsAverage={
                volumeResponse?.volumeInfo?.averageRating ?? 0
              }
              bookTitle={volumeResponse?.volumeInfo?.title}
              imageSrc={
                volumeResponse?.volumeInfo?.imageLinks?.large ||
                volumeResponse?.volumeInfo?.imageLinks?.thumbnail
              }
            />
          </ProductContainer>
          <ReviewsContainer>
            <ReviewsSaved>
              {reviewsFiltered.length > 0 && (
                <H2 weight="600" size="30px" marginBottom="35px">
                  Reseñas
                </H2>
              )}
              {reviewsFiltered.map((item, index) => (
                <ReviewItem
                  handleDelete={(value) =>
                    setOpenModal({ status: true, reviewId: value })
                  }
                  reviewId={item.id}
                  review={item.review}
                  reviewerName={item.name}
                  last={reviewsFiltered.length - 1 === index}
                  distanceTime={item.createdAt}
                />
              ))}
            </ReviewsSaved>
            <H2 weight="600" size="30px" marginBottom="35px">
              Escribe una reseña
            </H2>
            <FormContainer>
              <InputText
                value={values.name}
                name="name"
                handleChange={handleChange('name')}
                error={errors.name}
                marginBottom="30px"
                label="Nombre de usuario"
                width="100%"
              />
              <InputTextArea
                value={values.review}
                name="review"
                handleChange={handleChange('review')}
                label="Reseña"
                width="100%"
                height="150px"
                error={errors.review}
              />
              <Button
                disabled={!isEmpty(errors)}
                width="150px"
                height="35px"
                size="14px"
                marginTop="20px"
                onClick={handleSubmit}
              >
                Publicar
              </Button>
            </FormContainer>
          </ReviewsContainer>
        </Wrapper>
      )}
      <ConfirmationModal
        reviewId={openModal.reviewId}
        open={openModal.status}
        handleClose={() => setOpenModal({ status: false, reviewId: '' })}
        handleAction={(value) => handleDeleteReview(value)}
      />
    </LayoutOrganism>
  );
};

export default VolumeDetailPage;
