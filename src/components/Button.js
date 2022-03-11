const Button = ({ color, text , onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundcolor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
export default Button;
