import styled from 'styled-components';

const Cell = props => {
  const { imgSrc, name, rate } = props;
  return (
    <Wrapper>
      {imgSrc ? <img src={imgSrc} alt={name} /> : <GrayBackGroundDiv></GrayBackGroundDiv>}
      <div>{name}</div>
      <div>{rate}</div>
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
  img {
    /* min-height: 60rem; */
    width: 100%;
  }
  div {
    margin: 5px;
    text-align: center;
    font-size: 2rem;
  }
`;
export default Cell;
