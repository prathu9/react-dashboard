import "./CustomButton.css";

const CustomButton = ({children, className, leftIcon, rightIcon, ...buttonProps}) => {
    return(
        <button className={`custom-btn ${className}`} {...buttonProps}>
            <span className="btn-content">
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
            </span>
        </button>
    )
}

export default CustomButton;