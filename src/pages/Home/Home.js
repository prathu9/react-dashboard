import { useState } from "react";
import { ReactComponent as TONIcon } from "../../assets/icons/TON.svg";
import { ReactComponent as TONIXIcon } from "../../assets/icons/TONIX.svg";
import { ReactComponent as ClaimIcon } from "../../assets/icons/claim.svg";
import { ReactComponent as BoostIcon } from "../../assets/icons/boost.svg";
import {ReactComponent as HomeSpinnerIcon} from "../../assets/icons/home-spinner.svg";
import {ReactComponent as InformationIcon} from "../../assets/icons/information.svg";
import {ReactComponent as TONHomeIcon} from "../../assets/icons/ton-home.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import WalletItem from "../../components/WalletItem/WalletItem";
import "./Home.css";
import ModalOverlay from "../../components/ModalOverlay/ModalOverlay";
import WalletDeposit from "../../components/WalletDeposit/WalletDeposit";
import Claim from "./components/Claim/Claim";

const walletBalance = [
  { id: 1, icon: <TONIcon />, amount: 178.8245, unit: "TON" },
  { id: 2, icon: <TONIXIcon />, amount: 100, unit: "TONIX" },
];

const Home = () => {
  const [openClaim, setOpenClaim] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);

  const toggleClaim = () => {
    setOpenClaim(!openClaim);
    console.log("check")
  };

  const toggleDeposit = () => {
    setOpenDeposit(!openDeposit);
  };

  return (
    <div className="home-section">
      <div className="wallet-balance">
        {walletBalance.map(({ id, icon, amount, unit }) => (
          <WalletItem
            key={id}
            handleClick={toggleClaim}
            icon={icon}
            amount={amount}
            unit={unit}
          />
        ))}
      </div>
      <div className="home-main">
        <div className="home-image-wrapper">
        <HomeSpinnerIcon/>
        <TONHomeIcon className="ton-home-icon"/>
        </div>
       
        <div className="ton-balance">
          0.0282382423 TON
        </div>
        <div className="hash-value">
          <span>
            <InformationIcon/>
          </span>
          <span>2 GH/s ⚡</span>
        </div>
      </div>
      <div className="home-action-btn-wrapper">
        <CustomButton onClick={toggleClaim} leftIcon={<ClaimIcon />}>
          Claim
        </CustomButton>
        <CustomButton onClick={toggleDeposit} leftIcon={<BoostIcon />}>
          Boost
        </CustomButton>
      </div>
      {openClaim && (
        <ModalOverlay >
          <Claim toggleClaim={toggleClaim}/>
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

export default Home;
