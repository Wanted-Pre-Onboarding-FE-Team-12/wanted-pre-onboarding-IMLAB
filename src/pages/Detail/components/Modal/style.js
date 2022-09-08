import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.25s linear;

  .modalContainer {
    position: absolute;
    display: flex;
    align-items: center;
    max-width: 1100px;
    height: 800px;
    width: 100%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
