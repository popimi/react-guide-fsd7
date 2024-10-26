const Button = ({ children, type, handleClick }) => {
  const buttonScheme = {
    primary: "bg-blue-500 text-white duration-200 hover:bg-blue-600",
    secondary: "bg-green-500 text-white duration-200 hover:bg-green-600",
  };

  return (
    <button
      className={`${buttonScheme[type]} min-w-20 h-10 pb-1 rounded-md`}
      onClick={() => handleClick() || ""}
    >
      {children}
    </button>
  );
};

export default Button;
