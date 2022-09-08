import styled from 'styled-components';

export const NavigationWrapper = styled.header`
  display: grid;
  grid-template-columns: 10% auto;
  align-items: center;
  padding: 2rem ${props => props.theme.sideSpace.large} 0;
  margin: 2rem 0;
  letter-spacing: ${props => props.theme.text.spacing};
  min-height: 10rem;
`;

export const NavLogo = styled.div`
  font-size: 4rem;
  margin-left: 10rem;
  img {
    width: 250px;
  }
`;
