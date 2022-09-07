import Cell from '@pages/TopRated/components/Cell';
import styled from 'styled-components';

const sampleData = {
  vote_average: '9.5',
  poster_path:
    'https://resizing.flixster.com/3Fo33c1KE2pE14tbmAaP4ZKHw-k=/206x305/v2/https://resizing.flixster.com/8PrK7bOcPTGabSGj7Js1I6EXUyw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjE1MjEzMC53ZWJw',
  title: '밴드오브브라더스',
};

const TopRated = () => {
  return (
    <Wrapper>
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
      <Cell
        imgSrc={sampleData.poster_path}
        name={sampleData.title}
        rate={sampleData.vote_average}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 90vw;
  margin: auto;
`;

export default TopRated;
