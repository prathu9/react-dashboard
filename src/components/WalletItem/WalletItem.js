import {ReactComponent as WalletIcon} from "../../assets/icons/wallet.svg"
import "./WalletItem.css";

const WalletItem = ({icon, amount, unit, handleClick}) => {
    return(
        <div onClick={handleClick} className="wallet-item">
            <div className="token-icon-wrapper">
                {icon}
            </div>
            <div className="balance-info">
                <span className="label">Balance</span>
                <span className="amount">{amount} {unit}</span>
            </div>
            <div className="wallet-icon-wrapper">
                <WalletIcon/>
            </div>
        </div>
    )
}

export default WalletItem;