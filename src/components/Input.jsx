const Input = (props) => {
  const handleDataChange = (event) => {
    props.setData(event.target.value);
  };
  return (
    <div className="input-box">
      <h2>{props.title}</h2>
      <input
        placeholder={props.placeholder}
        type={props.text}
        name={props.data}
        onChange={handleDataChange}
        className="input"
      />
      <p>{props.alert}</p>
    </div>
  );
};

export default Input;
