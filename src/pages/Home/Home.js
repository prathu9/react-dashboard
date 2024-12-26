import { useState } from "react";
import { ReactComponent as TONIcon } from "../../assets/icons/TON.svg";
import { ReactComponent as TONIXIcon } from "../../assets/icons/TONIX.svg";
import WalletItem from "../../components/WalletItem/WalletItem";
import "./Home.css";

const walletBalance = [
  { icon: <TONIcon />, amount: 178.8245, unit: "TON" },
  { icon: <TONIXIcon />, amount: 100, unit: "TONIX" },
];

const Home = () => {
  const [openWithdrawal, setOpenWithdrawal] = useState(false);

  const toggleWithdrawal = () => {
    setOpenWithdrawal(!openWithdrawal);
  };

  return (
    <div className="home-section">
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
    </div>
  );
};

export default Home;
