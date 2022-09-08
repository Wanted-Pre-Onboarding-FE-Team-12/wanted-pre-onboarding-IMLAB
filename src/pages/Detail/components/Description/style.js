import styled from 'styled-components';

export const MovieDescription = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: grid;
  grid-template-rows: 10rem 2rem fit-content 8rem;
  .movie-title {
    font-size: 8rem;
  }
  .overview {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 300;
  }
`;

export const GenreContainer = styled.div`
  span {
    margin-right: 1.3rem;
    padding: 0.4rem 1.5rem;
    font-size: 2rem;
    border: 3px solid ${props => props.theme.colors.primary8};
    border-radius: 40px;
  }
`;
