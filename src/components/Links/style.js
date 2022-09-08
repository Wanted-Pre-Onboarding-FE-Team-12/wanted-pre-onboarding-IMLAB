import styled from 'styled-components';

export const NavLinksWrapper = styled.div`
  margin: 0 auto;
  .page-link {
    letter-spacing: ${props => props.theme.text.spacing};
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.25s;
  }
  // 네비게이션 링크
  .nav-links {
    display: flex;
    .page-link {
      padding: 1rem 2rem;
      font-size: 2.1rem;
      font-weight: 300;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;
