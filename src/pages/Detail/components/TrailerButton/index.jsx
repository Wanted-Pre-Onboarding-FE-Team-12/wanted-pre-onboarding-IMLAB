import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import * as movieDetailApi from '@api/movieDetailApi';
import Modal from '../Modal';

// CSS
import * as S from './style';

const TrailerButton = ({ movieId }) => {
  const [openModal, setOpenModal] = useState(false);

  const { data: videoData, state } = useQuery(
    ['video', movieId],
    () => movieDetailApi.getMovieVideo(movieId),
    { retry: 1 },
  );

  const { key: videoKey } = videoData?.results[0] || {};

  useEffect(() => {
    setOpenModal(true);
  }, [state]);

  return (
    <S.ButtonWrapper>
      {videoKey && (
        <button onClick={() => setOpenModal(true)} className="modalButton">
          트레일러 보기
        </button>
      )}
      <Modal videoKey={videoKey} open={openModal && videoKey} onClose={() => setOpenModal(false)} />
    </S.ButtonWrapper>
  );
};

export default TrailerButton;
