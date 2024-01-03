/* eslint-disable react/prop-types */
function AuthFormInput({
  onBlur,
  onChange,
  type,
  value,
  placeholder,
  name,
  styles,
}) {
  return (
    <input
      className={`input input-bordered w-full focus:outline-none focus:ring-0 ${styles}`}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
}

export default AuthFormInput;
