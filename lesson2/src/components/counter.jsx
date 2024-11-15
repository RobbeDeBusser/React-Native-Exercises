import { useState } from "react";

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
  const [count, setCount] = useState(0);

  const backgroundStyle = {
    padding: 50,
    backgroundColor: "#FFC53A",
    width: 250,
    height: 130,
    borderRadius: 10,
    textAlign: "center"
  };
  
  function handleClick(event, operation) {
    if (event.shiftKey & operation === "+"){
      setCount(count + 69);
    } else if (event.shiftKey & operation === "-"){
      setCount(count - 69);
    } else if (operation === "+"){
      setCount(count + 1);
    } else if (operation === "-"){
      setCount(count - 1);
    }
  }

  function Button({ operation, onClick }){
    return (
      <button onClick={(event)=> onClick(event, operation)}>
        {operation}
      </button>
    )
  }

  return (
    <div style={backgroundStyle}>
      <Number display={count}/>
      <Button operation="+" onClick={handleClick}/>
      <Button operation="-" onClick={handleClick}/>
    </div>
  );
}

export default Counter;