import React from 'react';

import Links from '@components/Links';
import { navLinks } from '@utils/links';

// CSS
import * as S from './style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.NavigationWrapper>
      <S.NavLogo>
        <Link to="/">Logo</Link>
      </S.NavLogo>
      <Links styleClass="nav-links" linkData={navLinks} />
    </S.NavigationWrapper>
  );
};

export default Header;
