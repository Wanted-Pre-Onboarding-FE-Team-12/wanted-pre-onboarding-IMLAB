import styled from 'styled-components';

export const MovieInfoWrapper = styled.article`
  display: grid;
  grid-template-columns: 450px 1fr;

  margin: 30rem auto 0;
  max-width: 1300px;

  img {
    width: 450px;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    .post-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10rem;
    }
  }
`;
