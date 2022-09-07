import React, { useCallback, useEffect } from 'react';
import Layout from 'layout';
import ScrollUpButton from 'react-scroll-up-button';

import useReadInfinityUpcoming from '@pages/Upcoming/hooks/useReadInfinityUpcoming';
import PageItem from '@pages/Upcoming/components/PageItem';
import Loading from '@components/Loading/index';

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
      {isFecthing && <Loading />}
      {isSuccess && (
        <>
          <h1>Upcoming movies</h1>
          <div>
            {data?.pages?.map((page, pageIndex) => {
              return <PageItem key={pageIndex} page={page} pageIndex={pageIndex} />;
            })}
          </div>
        </>
      )}
      <ScrollUpButton />
    </Layout>
  );
};

export default Upcoming;
