import CustomButton from "../../components/CustomButton/CustomButton";
import { ReactComponent as TONSymbolIcon } from "../../assets/icons/ton-symbol.svg";
import { ReactComponent as HashIcon } from "../../assets/icons/hash.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icons/language.svg";
import { ReactComponent as InviteFriendsIcon } from "../../assets/icons/friends-invite.svg";
import { ReactComponent as ContactSupportIcon } from "../../assets/icons/contact-support.svg";
import { ReactComponent as LegalIcon } from "../../assets/icons/legal.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy.svg";
import "./More.css";

const userData = {
  userName: "Alex",
  imageUrl: `${process.env.PUBLIC_URL}/Dog_Breeds.jpg`,
  id: "828419585",
  language: "English",
};

const More = () => {
  return (
    <div className="more-section">
      <div className="profile-header">
        <div className="profile-greeting">
          <span className="greeting-text">Hello,</span>
          <span className="profile-name">{userData.userName}</span>
        </div>
        <div className="avatar-wrapper">
          <img src={userData.imageUrl} alt="avatar" />
        </div>
      </div>
      <div className="separator" />
      <CustomButton leftIcon={<TONSymbolIcon />} className="connect-wallet-btn">
        Connect Wallet
      </CustomButton>
      <div className="separator" />
      <ul className="profile-info">
        <li>
          <span>
            <HashIcon />
            <span>My ID</span>
          </span>
          <span>{userData.id}</span>
        </li>
        <li>
          <span>
            <LanguageIcon />
            <span>Language</span>
          </span>
          <span>{userData.language}</span>
        </li>
        <li>
          <span>
            <InviteFriendsIcon />
            <span>Invite Friends</span>
          </span>
        </li>
        <li>
          <span>
            <ContactSupportIcon />
            <span>Contact Support</span>
          </span>
        </li>
        <li>
          <span>
            <LegalIcon />
            <span>Legal Information</span>
          </span>
        </li>
        <li>
          <span>
            <TrophyIcon />
            <span>Ratings & Leagues (soon)</span>
          </span>
        </li>
      </ul>
      <div className="spacer"></div>
    </div>
  );
};

export default More;
