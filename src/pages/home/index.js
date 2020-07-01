import React from 'react';

//Icons
import { ReactComponent as LibraryIcon } from '../../assets/icons/library.svg';

//MaterialUi
import Pagination from '@material-ui/lab/Pagination';

//Styles
import { Wrapper, EmptyStateContainer, PaginationContainer } from './styles';

//Custom Hooks
import { useGetVolumes } from '../../data/hooks/volumes';

//React-use
import { useMedia } from 'react-use';

// RecoilJs
import { SearchValue, SearchPage } from '../../utils/recoil/atoms';
import { useRecoilState } from 'recoil';

//Atoms
import Loading from '../../components/atoms/Loading';
import Span from '../../components/atoms/Text/span';

//Organism
import LayoutOrganism from '../../components/organisms/Layout';
import BookItem from '../../components/organisms/BookItem';

const imagePlaceholder =
  'https://www.greatplacetowork.com.ar/templates/gptw/images/no-image-available.jpg';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(SearchValue);
  const [searchPage, setSearchPage] = useRecoilState(SearchPage);
  const isTablet = useMedia('(max-width: 760px)');
  const { data: volumesData, status: volumesStatus } = useGetVolumes(
    searchTerm,
    searchPage
  );

  const flatMap = (book) => {
    return {
      id: book.id,
      imageSrc: book.volumeInfo?.imageLinks?.thumbnail || imagePlaceholder,
      bookAuthor: book?.volumeInfo?.authors?.[0] || 'Sin autor',
      bookReviewsAverage: book.volumeInfo?.averageRating || 0,
      bookTitle: book.volumeInfo?.title,
    };
  };

  const booksMapped = volumesData?.items?.map(flatMap);

  return (
    <LayoutOrganism
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      withSearch
    >
      <Wrapper>
        {searchTerm.length === 0 ? (
          <EmptyStateContainer>
            <LibraryIcon width="200px" height="200px" />
            <Span
              marginTop="20px"
              size={isTablet ? '30px' : '40px'}
              weight={600}
            >
              ¿Que libro necesitas?
            </Span>
          </EmptyStateContainer>
        ) : volumesStatus === 'loading' ? (
          <Loading size={50} />
        ) : volumesData?.totalItems === 0 ? (
          <EmptyStateContainer>
            No se encontro ninguna coincidencia
          </EmptyStateContainer>
        ) : (
          booksMapped.map((book) => (
            <BookItem
              id={book.id}
              imageSrc={book.imageSrc}
              imageWidth="200px"
              imageHeight="280px"
              bookAuthor={book.bookAuthor}
              bookReviewsAverage={book.bookReviewsAverage}
              bookTitle={book.bookTitle}
            />
          ))
        )}
        {volumesData?.totalItems > 10 && (
          <PaginationContainer>
            <Pagination
              page={searchPage / 10}
              onChange={(_event, page) => setSearchPage(page * 10)}
              count={volumesData?.totalItems}
            />
          </PaginationContainer>
        )}
      </Wrapper>
    </LayoutOrganism>
  );
};

export default HomePage;
