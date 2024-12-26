import CustomButton from "../../../../components/CustomButton/CustomButton";
import "./Claim.css";

const Claim = ({ toggleClaim }) => {
  return (
    <div className="claim-section">
      <h2 className="title">Claim TON to Wallet Balance</h2>
      <p className="claim-info">
        Once claimed, the mined TON will be deducted from your mining balance
        and will be credited to your wallet balance.
      </p>
      <p className="min-amount-detail">Minimum claim amount is 0.015 TON</p>
      <CustomButton>CLaim</CustomButton>
      <CustomButton onClick={toggleClaim} className="not-yet-btn">
        Not yet
      </CustomButton>
    </div>
  );
};

export default Claim;
