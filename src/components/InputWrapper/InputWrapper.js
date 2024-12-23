import "./InputWrapper.css";

const InputWrapper = ({ id, rightIcon, ...inputProps }) => {
  return (
    <div className="input-wrapper">
      <input id={id} {...inputProps} />
      {rightIcon && (
        <div className="right-icon">
         {rightIcon}
        </div>)}
    </div>
  );
};

export default InputWrapper;
