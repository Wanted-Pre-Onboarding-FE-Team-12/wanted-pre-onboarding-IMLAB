import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Skeleton from './Skeleton';

const Cell = props => {
  const { imgSrc, name, rate, id } = props;
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Wrapper ref={ref} onClick={handleClick}>
      {inView ? (
        <>
          {imgSrc ? <img src={imgSrc} alt={name} /> : <GrayBackGroundDiv></GrayBackGroundDiv>}
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
  height: 60rem;
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
    width: 100%;
  }
  div {
    margin: 5px;
    text-align: center;
    font-size: 2rem;
  }
`;
export default Cell;
