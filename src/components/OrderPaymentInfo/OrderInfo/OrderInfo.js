import CustomButton from "../../CustomButton/CustomButton";
import "./OrderInfo.css";

const OrderInfo = ({closeOrderPaymemtInfo}) => {
    return(
        <div className="order-info">
            <ul className="order-info-list">
                <li>
                    <h2>Order Details</h2>
                    <CustomButton onClick={closeOrderPaymemtInfo} className="cancel-btn">Cancel</CustomButton>
                </li>
                <li>
                    <span>Mining Power:</span>
                    <span>150 GH/s ⚡</span>
                </li>
                <li>
                    <span>Rent period:</span>
                    <span>30 days</span>
                </li>
                <li>
                    <span>Total profit:</span>
                    <span>~20,218 TON</span>
                </li>
                <li>
                    <span>Daily profit:</span>
                    <span>~0.674 TON</span>
                </li>
                <li>
                    <span>Price:</span>
                    <span>15 TON</span>
                </li>
            </ul>
        </div>
    )
}

export default OrderInfo;