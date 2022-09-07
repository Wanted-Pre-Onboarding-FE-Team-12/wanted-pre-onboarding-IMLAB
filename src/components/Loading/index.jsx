import React from 'react';
import * as S from './style';
import Layout from '../../layout/index';
import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Layout>
      <S.Background>
        {/* <S.LoadingText>잠시만 기다려 주세요.</S.LoadingText>
        <img src={loadingdark} alt="로딩" /> */}
        <Oval
          height={80}
          width={80}
          color="white"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </S.Background>
    </Layout>
  );
};

export default Loading;
