function Number({ display }) {
  var textStyle = {
    fontSize: 72,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold"
  };

  return (
    <div style={textStyle}>
      {display}
    </div>
  );
}

function Counter() {
  let count = 0;

  const backgroundStyle = {
    padding: 50,
    backgroundColor: "#FFC53A",
    width: 250,
    height: 130,
    borderRadius: 10,
    textAlign: "center"
  };
  
  function handleClick() {
    count = count + 1;
  }

  return (
    <div style={backgroundStyle}>
      <Number display={count}/>
      <button>+</button>
    </div>
  );
}

export default Counter;