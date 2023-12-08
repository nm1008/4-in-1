

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="p-2 bg-blue-600 text-white rounded-lg ">{children}</button>
    </div>
  )
}

export default Button
