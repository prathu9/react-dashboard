import { ReactComponent as TONIcon } from "../../assets/icons/TON.svg";
import { ReactComponent as TONIXIcon } from "../../assets/icons/TONIX.svg";
import WalletItem from "../../components/WalletItem/WalletItem";
import "./Wallet.css";
import { ReactComponent as BoostIcon } from "../../assets/icons/boost.svg";
import { ReactComponent as MagnifyGlassIcon } from "../../assets/icons/magnify-glass.svg";
import ModalOverlay from "../../components/ModalOverlay/ModalOverlay";
import WalletWithdrawal from "../../components/WalletWithdrawal/WalletWithdrawal";
import { useState } from "react";
import WalletDeposit from "../../components/WalletDeposit/WalletDeposit";
import CustomButton from "../../components/CustomButton/CustomButton";

const walletBalance = [
  { icon: <TONIcon />, amount: 178.8245, unit: "TON" },
  { icon: <TONIXIcon />, amount: 100, unit: "TONIX" },
];

const Wallet = () => {
  const [openWithdrawal, setOpenWithdrawal] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);

  const toggleWithdrawal = () => {
    setOpenWithdrawal(!openWithdrawal);
  };

  const toggleDeposit = () => {
    setOpenDeposit(!openDeposit);
  };

  return (
    <div className="wallet-container">
      <div className="wallet-balance">
        {walletBalance.map(({ icon, amount, unit }) => (
          <WalletItem
            handleClick={toggleWithdrawal}
            icon={icon}
            amount={amount}
            unit={unit}
          />
        ))}
      </div>
      <CustomButton onClick={toggleDeposit} className="boost-btn">
        <span>
          <BoostIcon />
        </span>
        <span>Boost</span>
      </CustomButton>
      <h2 className="transaction-title">Transaction History</h2>
      <div className="transaction-wrapper">
        <div className="no-transaction">
          <div>
            <MagnifyGlassIcon />
          </div>
          <span>No transactions yet...</span>
        </div>
      </div>
      {openWithdrawal && (
        <ModalOverlay>
          <WalletWithdrawal toggleWithdrawal={toggleWithdrawal} />
        </ModalOverlay>
      )}
      {openDeposit && (
        <ModalOverlay>
          <WalletDeposit toggleDeposit={toggleDeposit} />
        </ModalOverlay>
      )}
    </div>
  );
};

export default Wallet;
