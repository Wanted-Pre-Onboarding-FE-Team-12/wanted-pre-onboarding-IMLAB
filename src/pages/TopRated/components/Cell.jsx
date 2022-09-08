import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Skeleton from './Skeleton';

const Cell = props => {
  const [isLoad, setIsLoad] = useState(false);
  const [img, setImg] = useState('');
  const { imgSrc, name, rate, id } = props;
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const imgRef = useRef(null);

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setIsLoad(true);
      setImg(imgSrc);
    };
  }, [imgSrc]);

  return (
    <Wrapper ref={ref} onClick={handleClick}>
      {inView && isLoad ? (
        <>
          {imgSrc ? (
            <img src={img} alt={name} />
          ) : (
            <GrayBackGroundDiv ref={imgRef}></GrayBackGroundDiv>
          )}
          <div>{name}</div>
          <div>{rate}</div>
        </>
      ) : (
        <Skeleton />
      )}
    </Wrapper>
  );
};

const GrayBackGroundDiv = styled.div`
  width: 100%;
  background-color: gray;
  min-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }
  div {
    margin: 5px;
    text-align: center;
    font-size: 2rem;
  }
`;
export default Cell;
