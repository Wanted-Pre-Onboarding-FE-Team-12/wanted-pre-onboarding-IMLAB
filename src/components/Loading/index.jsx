import React from 'react';
import loading from '../../assets/loading.gif';
import * as S from './style';

const Loading = () => {
  return (
    <S.Background>
      <S.LoadingText>잠시만 기다려 주세요.</S.LoadingText>
      <img src={loading} alt="로딩" />
    </S.Background>
  );
};

export default Loading;
