import styled from 'styled-components';

const Skeleton = () => {
  return (
    <Wrapper>
      <GrayBackGroundDiv></GrayBackGroundDiv>
      <GrayTitle></GrayTitle>
      <GrayVote></GrayVote>
    </Wrapper>
  );
};
const GrayVote = styled.div`
  width: 10%;
  background-color: gray;
  height: 2rem;
`;
const GrayTitle = styled.div`
  width: 80%;
  background-color: gray;
  height: 2rem;
`;
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
  img {
    min-height: 60rem;
    width: 100%;
  }
  div {
    margin: 5px;
    text-align: center;
    font-size: 2rem;
  }
`;
export default Skeleton;
