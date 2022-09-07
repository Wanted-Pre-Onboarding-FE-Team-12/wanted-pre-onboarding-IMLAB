import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollUpButton = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // window.scrollY와 window.pageYOffset는 같은 속성이지만 오래된 브라우저의 경우 pageYOffset만 지원하는 경우가 있다함.
  const handleScroll = () => (window.pageYOffset >= 50 ? setIsScroll(true) : setIsScroll(false));
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return isScroll ? <Wrapper onClick={handleClick}></Wrapper> : <></>;
};

const Wrapper = styled.div`
  position: fixed;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  bottom: 5%;
  right: 5%;
  padding: 2rem;
  color: black;
  background-color: ${props => props.theme.colors.primary6};
  border-radius: 2rem;

  ::after {
    position: absolute;
    content: '';
    left: 1rem;
    top: 1.3rem;
    border-bottom: 20px solid ${props => props.theme.colors.primary2}; /* 화살표 */
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`;

export default ScrollUpButton;
