import React from 'react';
import MovieCards from '@pages/Upcoming/components/MovieCards';

const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/w200/';

function PageItem({ page, pageIndex }) {
  return page?.result?.map((movie, movieIndex) => (
    <React.Fragment key={movieIndex}>
      <MovieCards
        movieImage={movie.poster_path ? `${IMAGE_BASEURL}${movie.poster_path}` : null}
        movieId={movie.id}
        movieName={movie.original_title}
        movieRelease={movie.release_date}
      />
    </React.Fragment>
  ));
}

export default PageItem;
