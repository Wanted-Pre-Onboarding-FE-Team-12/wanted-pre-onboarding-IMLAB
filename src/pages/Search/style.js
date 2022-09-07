import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  gap: 20px;
  text-align: center;
`;

export const MovieCardContainer = styled.div`
  padding: 20px 0;
  position: relative;

  :hover img {
    cursor: pointer;
    transform: scale(1.05) translateY(-10px);
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  width: 90%;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Grade = styled.p`
  font-size: 1rem;
  font-weight: 900;
  margin-top: 1rem;
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 200px;
  height: 280px;
  margin: 0 auto;
`;

export const FetchingLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 30px;
`;

export const Error = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  font-size: 30px;
  color: red;
`;

export const Loading = styled.div`
  display: inline-block;
  position: absolute;
  width: 120px;
  height: 120px;
  top: 45%;
  right: 50%;
  transform: translate(50%, -50%) rotate(45deg);
  transform-origin: 40px 40px;

  div {
    top: 40px;
    left: 40px;
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgb(115, 158, 214);
    animation: loading-container 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

    div:after,
    div:before {
      content: ' ';
      position: absolute;
      display: block;
      width: 40px;
      height: 40px;
      background: rgb(115, 158, 214);
    }
    div:before {
      left: -24px;
      border-radius: 50% 0 0 50%;
    }
    div:after {
      top: -24px;
      border-radius: 50% 50% 0 0;
    }
    @keyframes loading-container {
      0% {
        transform: scale(0.95);
      }
      5% {
        transform: scale(1.1);
      }
      39% {
        transform: scale(0.85);
      }
      45% {
        transform: scale(1);
      }
      60% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(0.9);
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  font-weight: 900;
  :hover {
    cursor: pointer;
    color: white;
  }
`;

export const ModalStyle = styled.div`
  position: fixed;
  z-index: 200;
  background-color: #d7ccc8;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  top: 20%;
  left: 35%;
  width: 420px;
  height: 570px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  animation: movebox 1s forwards;

  @keyframes movebox {
    100% {
      transform: translate(0, 25px);
    }
    0% {
      transform: translate(0, 50px);
    }
  }
`;

export const ToDetailPage = styled.div`
  position: absolute;
  top: 100px;
  width: 95%;
  height: 80%;
  cursor: pointer;
`;

export const MovieData = styled.h3`
  font-size: 14px;
  height: 40px;
  margin: 3rem auto;
`;
