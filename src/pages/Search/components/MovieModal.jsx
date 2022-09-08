import * as S from '../style';

const MovieModal = ({ handleMoveDetailPage, isShowModal, handleCloseModal, movie }) => {
  return (
    <>
      <S.ModalStyle isOpen={isShowModal} ariaHideApp={false}>
        <S.CloseButton onClick={handleCloseModal}>
          <strong>X</strong>
        </S.CloseButton>
        <S.ToDetailPage onClick={handleMoveDetailPage}>
          <S.Title>{movie.original_title}</S.Title>
          <S.Img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = 'https://i.postimg.cc/ydscRqmN/2022-09-08-5-12-40.png';
            }}
            alt="poster img"
          />
          <S.MovieData>{movie.release_date}</S.MovieData>
        </S.ToDetailPage>
      </S.ModalStyle>
    </>
  );
};

export default MovieModal;
