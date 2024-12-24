import OrderInfo from "./OrderInfo/OrderInfo";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import "./OrderPaymentInfo.css";

const OrderPaymentInfo = ({closeOrderPaymemtInfo}) => {
    return(
        <div className="order-payment-info">
            <OrderInfo closeOrderPaymemtInfo={closeOrderPaymemtInfo}/>
            <PaymentInfo/>
        </div> 
    )
}

export default OrderPaymentInfo;