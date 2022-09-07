import React from 'react';
import Layout from 'layout';
import TopRated from './components/TopRated';
import Loading from '@components/Loading2';

const TopRatedPage = () => {
  return (
    <Layout>
      <TopRated />
      <Loading />
    </Layout>
  );
};

export default TopRatedPage;
