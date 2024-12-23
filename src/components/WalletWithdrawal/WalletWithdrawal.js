import { useEffect, useState } from "react";
import { ReactComponent as TONIcon } from "../../assets/icons/TON.svg";
import { ReactComponent as TONIXIcon } from "../../assets/icons/TONIX.svg";
import CustomButton from "../CustomButton/CustomButton";
import InputWrapper from "../InputWrapper/InputWrapper";
import "./WalletWithdrawal.css";

const WalletWithdrawal = ({ toggleWithdrawal }) => {
  const [withdrawalInput, setWithdrawalInput] = useState({
    tonAddress: "",
    amount: "",
  });

  const [isInputVerified, setIsInputVerified] = useState(false);

  useEffect(() => {
    const { tonAddress, amount } = withdrawalInput;

    if (tonAddress.length > 0 && amount.length > 0) {
      setIsInputVerified(true);
    } else {
      setIsInputVerified(false);
    }
  }, [withdrawalInput]);

  const onInputChange = (e) => {
    if (e) {
      const name = e.target.name;
      const value = e.target.value;

      setWithdrawalInput({
        ...withdrawalInput,
        [name]: value,
      });
    }
  };

  return (
    <div className="wallet-withdrawal">
      <div className="token-balance">
        <div>
          <TONIcon />
          <span>178.8528 TON</span>
        </div>
        <div>
          <TONIXIcon />
          <span>100 TONIX</span>
        </div>
      </div>
      <h2 class="title">Enter your personal TON address</h2>
      <h3 className="subTitle">
        This amount will be sent to the TON compatible wallet address
      </h3>
      <p className="info">Minimum send amount is 0.35 TON</p>
      <InputWrapper
        name="tonAddress"
        type="text"
        placeholder="Your TON address"
        onChange={onInputChange}
      />
      <InputWrapper
        name="amount"
        type="text"
        placeholder="Amount"
        rightIcon={"MAX"}
        onChange={onInputChange}
      />
      <p className="network-fee">Network fee: 0 TON</p>
      <p className="receive-amount">Receive amount: 0 TON</p>
      <CustomButton
        disabled={!isInputVerified}
        style={{opacity: isInputVerified? 1:0.5}}
      >
        Send
      </CustomButton>
      <CustomButton onClick={toggleWithdrawal} className="not-yet-btn">
        Not yet
      </CustomButton>
    </div>
  );
};

export default WalletWithdrawal;
