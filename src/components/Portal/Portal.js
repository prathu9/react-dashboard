import { createPortal } from "react-dom"
import "./Portal.css";

const Portal = ({children}) => {
    return(
        createPortal(
            <div className="portal-content">
                {children}
            </div>,
            document.querySelector(".dashboard")
        )
    )
}

export default Portal;