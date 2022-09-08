import React from 'react';
import { useNavigate } from 'react-router-dom';

import Links from '@components/Links';
import { navLinks } from '@utils/links';
import SearchBox from '@components/Search';
import logo from '@assets/logo.png';

// CSS
import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.NavigationWrapper>
      <S.NavLogo>
        <img onClick={() => navigate('/')} src={logo} alt="logo" />
      </S.NavLogo>
      <Links styleClass="nav-links" linkData={navLinks} />
      <SearchBox />
    </S.NavigationWrapper>
  );
};

export default Header;
