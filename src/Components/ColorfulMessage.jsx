export const ColorfulMessage = (props) => {
  const { color, children } = props;

  console.log('---ColorfulMessage---');
  const contentStyleA = {
    color,
    fontSize: '18px',
  };

  return <p style={contentStyleA}>{children}</p>;
};
