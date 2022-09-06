import React from 'react';

// CSS
import * as S from './style';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <p>&copy; {new Date().getFullYear()}, wanted-12-team All rights reserved.</p>
    </S.FooterWrapper>
  );
};

export default Footer;
