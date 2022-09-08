import styled from 'styled-components';

export const MovieDescription = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: grid;
  grid-template-rows: 10rem 2rem fit-content 8rem;
  .movie-title {
    font-size: 8rem;
  }
  .ratings {
    svg {
      color: #f7df1e;
      margin-right: 0.5rem;
    }
    font-size: 2rem;
    line-height: 2rem;
  }
  .overview {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 300;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    .movie-title {
      margin: 10rem 0 4rem;
    }
    .overview {
      margin: 1rem 0 3rem;
    }
  }
`;

export const GenreContainer = styled.div`
  span {
    margin-right: 1.3rem;
    padding: 0.4rem 1.5rem;
    font-size: 2rem;
    border: 3px solid ${props => props.theme.colors.primary8};
    border-radius: 40px;
    cursor: pointer;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    margin: 3rem 0;
  }
`;
