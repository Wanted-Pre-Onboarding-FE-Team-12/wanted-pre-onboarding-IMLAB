import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '@components/Header';
import Footer from '@components/Footer';

// CSS
import * as S from './style';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import ScrollUpButton from '@components/ScrollUp';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <S.LayoutWrapper>{children}</S.LayoutWrapper>
      <ScrollUpButton />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
