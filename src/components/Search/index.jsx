import { Link } from 'react-router-dom';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  return (
    <S.SearchBoxContainer>
      <input className="search-text" type="text" name="" />
      <Link to="/search" className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </Link>
    </S.SearchBoxContainer>
  );
};

export default SearchBox;
