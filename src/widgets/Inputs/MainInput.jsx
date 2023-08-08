/* eslint-disable react/prop-types */
const MainInput = ({
  type,
  placeholder,
  value = null,
  fontSize = "text-[16px]",
  onChange,
  name,
  required = false,
  disabled = false,
}) => {
  return (
    <input
      className={`p-2 border border-[#58585895] outline-none rounded-sm ${fontSize}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      step="0.5"
      required={required}
      disabled={disabled}
    />
  );
};

export default MainInput;
