import styled from 'styled-components';

export const DetailWrapper = styled.section`
  margin-bottom: 10rem;
`;

export const BannerWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Banner = styled.div`
  background: url(${props => props.url});
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 200px);
    background-color: rgba(46, 55, 72, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(
      180deg,
      rgba(46, 55, 72, 0.6),
      ${props => props.theme.colors.primary1}
    );
  }
`;
