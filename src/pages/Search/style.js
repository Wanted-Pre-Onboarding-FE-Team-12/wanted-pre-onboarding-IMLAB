import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;

export const MovieCardContainer = styled.div`
  padding: 20px 0;

  img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  :hover img {
    cursor: pointer;
    transform: scale(1.05) translateY(-10px);
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  width: 90%;
  height: 40px;
  text-align: center;
`;

export const Grade = styled.p`
  width: 90%;
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
  margin-top: 1rem;
`;
