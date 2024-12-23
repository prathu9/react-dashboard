import { ReactComponent as TONSymbol } from "../../assets/icons/ton-symbol.svg";
import CustomButton from "../CustomButton/CustomButton";
import InputWrapper from "../InputWrapper/InputWrapper";
import "./WalletDeposit.css";

const WalletDeposit = ({toggleDeposit}) => {
  return (
    <div className="wallet-deposit">
      <h2 className="title">Mining Power Boost</h2>
      <div className="info">
        <p>
          Here you can rent mining power for 30 days. The more mining power you
          have, the more TON you can mine.
        </p>
        <p>
          The investment profitability is 4,493% per day and 134,784% for 30
          days.
        </p>
      </div>

      <h3>150 GH/s ⚡</h3>
      <div className="stat-value">
        <span>Total profit: ~20,21</span>
        <span>
          <TONSymbol />
        </span>
      </div>
      <div className="stat-value">
        <span>Daily profit: ~0,674</span>
        <span>
          <TONSymbol />
        </span>
      </div>
      <div className="ton-value-wrapper">
        <InputWrapper
          className="ton-value"
          type="text"
          rightIcon={<TONSymbol />}
          placeholder="15"
        />
      </div>

      <div className="stat-value">
        <span>Minimum amount: 10</span>
        <span>
          <TONSymbol />
        </span>
      </div>

      <CustomButton>Add</CustomButton>
      <CustomButton onClick={toggleDeposit} className="back-btn">Back</CustomButton>
    </div>
  );
};

export default WalletDeposit;
