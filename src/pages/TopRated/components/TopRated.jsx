import Cell from '@pages/TopRated/components/Cell';
import styled from 'styled-components';

// const sampleData = {
//   vote_average: '9.5',
//   poster_path:
//     'https://resizing.flixster.com/3Fo33c1KE2pE14tbmAaP4ZKHw-k=/206x305/v2/https://resizing.flixster.com/8PrK7bOcPTGabSGj7Js1I6EXUyw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjE1MjEzMC53ZWJw',
//   title: '밴드오브브라더스',
// };
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const TopRated = props => {
  const { movies } = props;
  const { result: movieResults } = movies;
  const { results: movie } = movieResults;

  return (
    <Wrapper>
      {movie.map(movieInfo => {
        return (
          <Cell
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
