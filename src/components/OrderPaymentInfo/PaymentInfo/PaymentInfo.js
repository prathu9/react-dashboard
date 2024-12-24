import CustomButton from "../../CustomButton/CustomButton";
import "./PaymentInfo.css";
import qrcode from "../../../assets/qrcode.png";
import {ReactComponent as CopyIcon} from "../../../assets/icons/copy.svg";
import {ReactComponent as TONIcon} from "../../../assets/icons/TON.svg";

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <h2>Payment</h2>
      <h4>Connect your TON wallet to pay for the order.</h4>
      <CustomButton className="connect-btn">
        <span>
        <TONIcon/>
        <span className="btn-text">Connect Wallet</span>
        </span>
       
      </CustomButton>
      <p className="text-separator">
        <span>OR</span>
      </p>
      <p className="instruction">
        Send TON to the provided deposit address from
        <br />
        your personal wallet. Send only <b>Toncoin (TON)</b>, other assets will
        be lost forever.
      </p>
      <img className="qr-code" src={qrcode} alt="QR code" />
      <p className="amount">
        15 <span className="unit">TON</span>
      </p>
      <p className="address-title">Send 15 TON to this address:</p>
      <div className="address">
        <p>UQDHAcxzFOO5DH9Q5-XHh3Gnz-0dyrC42- 9sXJN0iST65jtb</p>
        <CopyIcon />
      </div>
    </div>
  );
};

export default PaymentInfo;
