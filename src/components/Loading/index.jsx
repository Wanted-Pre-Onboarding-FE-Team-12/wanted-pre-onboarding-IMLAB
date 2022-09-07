import React from 'react';
import loadingdark from '../../assets/loadingdark.gif';
import * as S from './style';
import Layout from '../../layout/index';

const Loading = () => {
  return (
    <Layout>
      <S.Background>
        <S.LoadingText>잠시만 기다려 주세요.</S.LoadingText>
        <img src={loadingdark} alt="로딩" />
      </S.Background>
    </Layout>
  );
};

export default Loading;
