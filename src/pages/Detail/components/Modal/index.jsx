import React from 'react';
import ReactPlayer from 'react-player';

// CSS
import * as S from './style';

const Modal = ({ open, onClose, videoKey }) => {
  if (!open) return null;
  return (
    <S.Wrapper onClick={onClose}>
      <div className="modalContainer">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>
    </S.Wrapper>
  );
};

export default Modal;
