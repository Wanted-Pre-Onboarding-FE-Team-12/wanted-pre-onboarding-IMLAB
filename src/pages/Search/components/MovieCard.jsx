import * as S from '../style';
const MovieCard = ({ movie }) => {
  return (
    <S.MovieCardContainer>
      <S.Title>
        {movie.original_language === 'en'
          ? movie.original_title
            ? movie.original_title
            : movie.original_name
          : movie.original_name
          ? movie.original_language === 'fr'
          : movie.original_title}
      </S.Title>
      <img
        style={{ width: '200px', height: '280px' }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="poster img"
      />
      <S.Grade>
        {movie.vote_average === 0
          ? Number.parseFloat(movie.popularity).toFixed(1)
          : movie.vote_average}
      </S.Grade>
    </S.MovieCardContainer>
  );
};

export default MovieCard;
