const Input = ({ ...props }) => {
  return (
    <input
      className="w-full p-6 px-8 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-200"
      {...props}
      placeholder={props.placeholder || "Enter text..."}
    />
  );
};

export { Input };
