import * as SC from './style';

const Loading = props => {
  const { dotColor, dotSize } = props;

  return (
    <SC.Wrapper>
      <SC.LoadingBar>
        <SC.Dot bgColor={dotColor} dotSize={dotSize} />
        <SC.Dot bgColor={dotColor} dotSize={dotSize} />
        <SC.Dot bgColor={dotColor} dotSize={dotSize} />
      </SC.LoadingBar>
    </SC.Wrapper>
  );
};

Loading.defaultProps = {
  dotColor: '#fff',
  dotSize: '30px',
};

export default Loading;
