const Button = ({ children, onClick, color }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`p-3 mx-2  text-white rounded-lg ${color} md:px-5 `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
