import styled from 'styled-components';

const Cell = props => {
  const { imgSrc, name, rate } = props;
  return (
    <Wrapper>
      <img src={imgSrc} alt={name} />
      <div>{name}</div>
      <div>{rate}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  div {
    margin: 5px;
    text-align: center;
  }
`;
export default Cell;
