import React from 'react';
import styled from 'styled-components';

export const MainThumbnail = ({ movie, handleClick }) => {
  if (movie === '') {
    return;
  }
  const { backdrop_path, title, overview, vote_average, vote_count } = movie;
  const prefix = 'https://image.tmdb.org/t/p/w500';
  return (
    <Thumbnail>
      <ThumbnailImage src={`${prefix}${backdrop_path}`}></ThumbnailImage>
      <ThumbnailDescription>
        <div className="col-top">
          <h1>{title}</h1>
          <p>{overview}</p>
          <p>{`⭐${vote_average}  🤩${vote_count}`}</p>
        </div>
        <GotoDetailButton onClick={handleClick}>보러가기</GotoDetailButton>
      </ThumbnailDescription>
    </Thumbnail>
  );
};

export default MainThumbnail;

const Thumbnail = styled.div`
  width: 90%;
  display: flex;
  margin: 3rem 0;
`;
const ThumbnailImage = styled.img`
  width: 50%;
  border-radius: 10px;
`;
const ThumbnailDescription = styled.div`
  width: 50%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 5rem;
    margin: 0;
  }
  p {
    font-size: 2rem;
    margin: 4rem 0;
  }
`;
const GotoDetailButton = styled.button`
  width: 50%;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: black;
  border-radius: 10px;
`;
