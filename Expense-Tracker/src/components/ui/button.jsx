const Button = ({ children, ...props }) => {
  return (
    <button
      className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md focus:outline-none transition-all duration-300 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
