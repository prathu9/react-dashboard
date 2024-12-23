import "./ModalOverlay.css";

const ModalOverlay = ({children}) => {
    return(
        <div className="modal-overlay">
            {children}
        </div>
    )
}

export default ModalOverlay;