const Card = ({ title, children }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
      <div className=" space-y-4 md:space-y-6 mb-5 sm:p-3">
        <div className="flex gap-10  flex-col items-center mt-5">
          <h1 className="font-bold">{title}</h1>
          <p>
           {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
