const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-xl rounded-lg p-6 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export { Card, CardContent };
