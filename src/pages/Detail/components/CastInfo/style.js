import styled from 'styled-components';

export const CastWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    margin-top: 2rem;
    justify-content: space-between;
  }
`;

export const profileCard = styled.div`
  margin: 0 0.4rem;
  width: 100px;
  .actorImg {
    width: 100%;
    display: block;
  }
  .actorName {
    display: inline-block;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
    white-space: pre-line;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    width: 120px;
  }
`;
