const Button = ({ children, onClick, color }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`p-2 text-sm  mt-0  text-white rounded-lg ${color} md:px-5 md:text-lg`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
