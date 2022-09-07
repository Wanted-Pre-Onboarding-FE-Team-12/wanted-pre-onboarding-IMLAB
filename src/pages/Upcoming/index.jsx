import React, { useCallback, useEffect } from 'react';
import Layout from 'layout';

import useReadInfinityUpcoming from '@pages/Upcoming/hooks/useReadInfinityUpcoming';
import PageItem from '@pages/Upcoming/components/PageItem';
import Loading from '@components/Loading/index';

import styled from 'styled-components';

const Upcoming = () => {
  const { isFecthing, isSuccess, data, hasNextPage, fetchNextPage } = useReadInfinityUpcoming();

  const handleScroll = useCallback(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    const isScrollOver = Math.round(scrollTop + innerHeight) >= scrollHeight;

    if (isScrollOver && hasNextPage && !isFecthing) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, isFecthing]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Layout>
      <Heading>Upcoming movies</Heading>
      {isFecthing && <Loading />}
      {isSuccess && (
        <CardList>
          {data?.pages?.map((page, pageIndex) => {
            return <PageItem key={pageIndex} page={page} pageIndex={pageIndex} />;
          })}
        </CardList>
      )}
    </Layout>
  );
};

const Heading = styled.h1`
  text-align: center;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`;

export default Upcoming;
