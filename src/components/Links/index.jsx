import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import * as S from './style';

const Links = ({ styleClass, linkData }) => {
  return (
    <S.NavLinksWrapper>
      <div className={styleClass}>
        {linkData.map((link, index) => (
          <Link className="page-link" to={link.path} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
    </S.NavLinksWrapper>
  );
};

export default Links;
