import Cell from '@pages/TopRated/components/Cell';
import { IMAGE_BASE_URL } from '@utils/links';
import styled from 'styled-components';

const TopRated = props => {
  const { movies } = props;
  const { result: movieResults } = movies;
  const { results: movie } = movieResults;

  return (
    <Wrapper>
      {movie.map(movieInfo => {
        return (
          <Cell
            id={movieInfo.id}
            key={movieInfo.id}
            imgSrc={`${IMAGE_BASE_URL}${movieInfo.poster_path}`}
            name={movieInfo.title}
            rate={movieInfo.vote_average}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 90vw;
  margin: auto;
`;

export default TopRated;
