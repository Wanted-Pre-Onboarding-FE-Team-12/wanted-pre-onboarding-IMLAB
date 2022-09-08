import styled from 'styled-components';

export const SearchBoxContainer = styled.form`
  position: fixed;
  z-index: 999;
  top: 60px;
  right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary2};
  height: 40px;
  border-radius: 40px;
  padding: 10px;

  :hover > .search-text {
    width: 220px;
    padding: 0 6px;
  }

  :hover > .search-btn {
    cursor: pointer;
  }

  .search-text {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: ${props => props.theme.colors.white};
    font-size: 15px;
    transition: 0.4s;
    width: 0px;
  }

  .search-btn {
    border: none;
    background: none;
    outline: none;
    color: ${props => props.theme.colors.lightRed};
    float: right;
    width: 40x;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary2};
    transition: 0.4s;
    padding: 0 5px;
  }
`;
