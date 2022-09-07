import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: calc(100vh - 30rem);
  padding: 0 ${({ theme }) => theme.sideSpace.large};
`;
