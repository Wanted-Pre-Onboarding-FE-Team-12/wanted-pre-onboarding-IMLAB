import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    height: 5rem;
    border: none;
    font-size: 2rem;
    background: ${props => props.theme.colors.primary4};
    border-radius: 5px;
    transition: 0.2s ease-in;
    &:hover {
      background: ${props => props.theme.colors.primary3};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    margin-top: 1rem;
    width: 100%;
  }
`;
