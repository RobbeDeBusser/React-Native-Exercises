function ControlledComponent(){
  const inputStyle = {
    padding: 10,
    borderRadius: 10,
    border: 'none',
    boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)'
  };

  function handleChange(event) {
    console.log(event.target);
  }

  return (
    <div>
      <input style={inputStyle}
        onChange={handleChange}
        />
      <div>Hello </div>
    </div>
  );
}

export default ControlledComponent;