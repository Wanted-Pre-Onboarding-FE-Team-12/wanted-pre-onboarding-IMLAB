import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');

  const handleToSearchSubmit = e => {
    e.preventDefault();
    navigate('/search', { state: { searchWord } });
  };

  const handleChange = ({ target }) => {
    setSearchWord('');
    const word = target.value;
    if (word) {
      setSearchWord(word);
    }
  };

  return (
    <S.SearchBoxContainer onSubmit={handleToSearchSubmit}>
      <input value={searchWord ?? ''} className="search-text" type="text" onChange={handleChange} />
      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </S.SearchBoxContainer>
  );
};

export default SearchBox;
