import styled from 'styled-components';

const Skeleton = () => {
  return (
    <>
      <GrayBackGroundDiv></GrayBackGroundDiv>
      <GrayTitle></GrayTitle>
      <GrayVote></GrayVote>
    </>
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
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Skeleton;
