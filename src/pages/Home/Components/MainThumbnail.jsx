import React from 'react';
import styled from 'styled-components';

export const MainThumbnail = ({ movie }) => {
  if (movie === '') {
    return;
  }
  const { backdrop_path, title, overview, vote_average, vote_count } = movie;
  const prefix = 'https://image.tmdb.org/t/p/w500';
  return (
    <Thumbnail>
      <ThumbnailImage src={`${prefix}${backdrop_path}`}></ThumbnailImage>
      <ThumbnailDescription>
        <h1>{title}</h1>
        <p>{overview}</p>
        <p>{`⭐${vote_average}  🤩${vote_count}`}</p>
        <GotoDetailButton>보러가기</GotoDetailButton>
      </ThumbnailDescription>
    </Thumbnail>
  );
};

export default MainThumbnail;

const Thumbnail = styled.div`
  width: 90%;
  display: flex;
`;
const ThumbnailImage = styled.img`
  width: 50%;
`;
const ThumbnailDescription = styled.div`
  width: 50%;
  padding: 0 2rem;
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 1.5rem;
    margin: 2rem 0;
  }
`;
const GotoDetailButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  background-color: black;
  border-radius: 10px;
`;
