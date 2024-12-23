// eslint-disable-next-line react/prop-types, no-unused-vars
const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return <button className={`${bgColor} ${textColor} cursor-pointer px-8 py-2 rounded-full`}>{text}</button>;
};

export default Button;
