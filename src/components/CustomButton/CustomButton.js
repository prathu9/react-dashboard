import "./CustomButton.css";

const CustomButton = ({children, className, ...buttonProps}) => {
    return(
        <button className={`custom-btn ${className}`} {...buttonProps}>
            {children}
        </button>
    )
}

export default CustomButton;