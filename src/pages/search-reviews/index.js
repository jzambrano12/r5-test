import React, { useState, useMemo } from 'react';

//Styles
import { Wrapper, NoMatchContainer } from './styles';

//Atoms

import Span from '../../components/atoms/Text/span';

//Molecules
import ReviewMolecule from '../../components/molecules/Reviews';

//Organism
import LayoutOrganism from '../../components/organisms/Layout';
import { useLocalStorage } from 'react-use';

//Icons
import { ReactComponent as NoMatchIcon } from '../../assets/icons/anonymous.svg';

const SearchReviews = () => {
  const [reviews] = useLocalStorage('reviews');
  const [searchTerm, setSearchTerm] = useState('');

  const reviewsFiltered = useMemo(() => {
    if (searchTerm.length === 0) {
      return reviews;
    } else {
      return reviews.filter((x) => x.name.toLowerCase().includes(searchTerm));
    }
  }, [reviews, searchTerm]);

  return (
    <LayoutOrganism
      withSearch
      withOutLink
      placeholder="Buscar reseñas..."
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    >
      <Wrapper>
        {reviewsFiltered.length === 0 ? (
          <NoMatchContainer>
            <NoMatchIcon width={80} height={80} />
            <Span size="20px" weight="600" marginTop="15px">
              No se encontraron coincidencias...
            </Span>
          </NoMatchContainer>
        ) : (
          reviewsFiltered.map((review, index) => (
            <ReviewMolecule
              distanceTime={review.createdAt}
              reviewerName={review.name}
              review={review.review}
              item={review}
              last={reviews.length - 1 === index}
            />
          ))
        )}
      </Wrapper>
    </LayoutOrganism>
  );
};

export default SearchReviews;
