import { ReactComponent as InstagramIcon } from "../../../../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../../assets/icons/youtube.svg";
import { ReactComponent as TikTokIcon } from "../../../../assets/icons/tiktok.svg";
import { ReactComponent as TONIXIcon } from "../../../../assets/icons/TONIX.svg";
import {ReactComponent as AddIcon} from "../../../../assets/icons/add.svg";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import "./Contest.css";

const Contest = () => {
  return (
    <div className="contest-section">
      <h2 className="title">Tell others about TONIX App</h2>
      <div className="contest-social-icons">
        <InstagramIcon />
        <YoutubeIcon />
        <TikTokIcon />
      </div>
      <div className="separator" />
      <div className="reward-details">
        <span>And get up to</span>
        <span className="reward-prize">
          <TONIXIcon />
          <span>10 000 000</span>
        </span>
        <span>TONIX for each video</span>
      </div>
      <div className="separator" />
      <CustomButton className="add-content-btn" leftIcon={<AddIcon/>}>
        Add Content and Earn
      </CustomButton>
      <div className="contest-rules">
        <h3 className="rules-title">Rules</h3>
        <ul>
          <li className="rule">
            <b>Create Content:</b> Make a fan video about TONIX App for YouTube Shorts,
            Instagram Reels, or TikTok.
          </li>
          <li className="rule">
            <b>Include your ID or Invite Link:</b> Attach your ID or invite link in the
            video description.
            <p className="">
            Get Your Invite Link on Friends
            section
            </p>
          </li>
          <li className="rule">
            Send the Link: Once your video reaches 100+ views, send us the link.
          </li>
        </ul>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Contest;
