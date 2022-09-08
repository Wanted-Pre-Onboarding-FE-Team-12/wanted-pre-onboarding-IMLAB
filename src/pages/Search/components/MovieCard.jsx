import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MovieModal from './MovieModal';

import * as S from '../style';

const MovieCard = ({ movie }) => {
  const [isShowModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleMoveDetailPage = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {isShowModal && (
        <MovieModal
          handleMoveDetailPage={handleMoveDetailPage}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          isShowModal={isShowModal}
          movie={movie}
        />
      )}
      <S.MovieCardContainer onClick={handleOpenModal}>
        <S.Title>{movie.original_title}</S.Title>
        <S.Img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = 'https://i.postimg.cc/ydscRqmN/2022-09-08-5-12-40.png';
          }}
          alt="poster img"
        />
        <S.Grade>
          {movie.vote_average === 0
            ? Number.parseFloat(movie.popularity).toFixed(1)
            : movie.vote_average}
        </S.Grade>
      </S.MovieCardContainer>
    </>
  );
};

export default MovieCard;
