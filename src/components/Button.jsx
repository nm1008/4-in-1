const Button = ({ children, onClick, color }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-3 py-2 mx-2 text-white rounded-lg ${color} md:px-5 `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
