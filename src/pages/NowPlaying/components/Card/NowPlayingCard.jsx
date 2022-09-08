import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import * as S from '../../style';
import alterImg from '../../../../assets/alternativeimage.jpeg';
import { IMAGE_BASE_URL } from '@utils/links';

const NowPlayingCard = ({ nowPlay }) => {
  const navigate = useNavigate();

  const { title, vote_average, poster_path, id } = nowPlay;

  const goToDetail = id => {
    navigate(`/movie/${id}`);
  };

  return (
    <S.CardWrap key={id}>
      <Card sx={{ maxWidth: 300, minHeight: 490 }} onClick={() => goToDetail(id)}>
        {poster_path ? (
          <S.PosterImg src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
        ) : (
          <S.PosterImg src={alterImg} />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: '22px', fontWeight: '600' }}
          >
            {title}
          </Typography>
          <S.VoteRatingBox>
            <Stack spacing={1}>
              <Rating
                style={{ fontSize: '24px' }}
                name="half-rating"
                defaultValue={vote_average / 2}
                precision={0.5}
              />
            </Stack>
            <S.VoteAverage>{vote_average}</S.VoteAverage>
          </S.VoteRatingBox>
        </CardContent>
      </Card>
    </S.CardWrap>
  );
};

export default NowPlayingCard;
