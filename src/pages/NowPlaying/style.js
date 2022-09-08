import styled from 'styled-components';
import variables from '../../styles/theme';

export const NowPlayingBox = styled.div`
  width: 100vw;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1600px;
  margin: 0 auto 100px auto;
`;

export const CardWrap = styled.div`
  width: 20%;
  margin: 20px 0;
`;

export const VoteRatingBox = styled.div`
  display: flex;
`;

export const VoteAverage = styled.span`
  margin: 3px 0 0 10px;
  font-size: 18px;
  font-weight: ${variables.text.fontWeight4};
`;

export const PosterImg = styled.img`
  width: 300px;
  height: 360px;
`;

export const NowPlayingHeaders = styled.header`
  display: flex;
  justify-content: space-between;
  width: 1600px;
  margin: 100px auto 0 auto;
  font-size: 28px;
  font-weight: 500;
  color: white;
`;

export const HeaderTitle = styled.span``;

export const HeaderButton = styled.div``;

export const RateButton = styled.button`
  font-size: 18px;
  border: none;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  background-color: ${variables.colors.lightRed};
  color: white;
  margin: 10px;
`;

export const CountButton = styled(RateButton)`
  background-color: ${variables.colors.primary5};
  color: ${variables.colors.primary3};
`;
