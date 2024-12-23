// eslint-disable-next-line react/prop-types, no-unused-vars
const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer px-8 py-2 rounded-full hover:scale-105 duration-300 relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
