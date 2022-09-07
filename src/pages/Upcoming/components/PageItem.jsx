import React from 'react';
import MovieCards from '@pages/Upcoming/components/MovieCards';

function PageItem({ page, pageIndex }) {
  return page?.result?.map((movie, movieIndex) => (
    <React.Fragment key={movieIndex}>
      <MovieCards
        movieImage={
          movie.poster_path ? `http://image.tmdb.org/t/p/w200/${movie.poster_path}` : null
        }
        movieId={movie.id}
        movieName={movie.original_title}
        movieRelease={movie.release_date}
      />
    </React.Fragment>
  ));
}

export default PageItem;
