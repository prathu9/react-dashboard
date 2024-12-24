import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ReactComponent as InviteFriendIcon } from "../../assets/icons/invite-friend.svg";
import "./InviteFriends.css";

const InviteFriends = () => {
  const inviteLink = "https://t.me/Tonix_Mining_Bot?staruser=john";

  return (
    <div className="invite-friends">
      <h2 className="title">Invite Friends!</h2>
      <h3 className="sub-title">You and your friend will receive bonuses</h3>
      <div className="invite-link-wrapper">
        <h2 className="title">Your Invite Link</h2>
        <div className="invite-link">
          <span className="link">{inviteLink}</span>
          <button className="copy-link">
            <CopyIcon />
          </button>
        </div>
        <div className="invite-friends-btn-wrapper">
          <CustomButton
            className="invite-friends-btn"
            leftIcon={<InviteFriendIcon />}
          >
            Invite a friend
          </CustomButton>
          <CustomButton className="copy-link-btn">
            <CopyIcon />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
