function Header(props) {
    const HeaderStyle = {
      height: 150,
      backgroundColor: props.color
    };
  
    return (
      <div style={HeaderStyle} />
    );
}
function Row(props) {
    const squareStyle = {
      height: 150,
      backgroundColor: props.color
    };
  
    return (
      <div style={squareStyle} />
    );
}
export default Multiplication;
