import { ReactComponent as TONIXIcon } from "../../../../assets/icons/TONIX.svg";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import Bolt from "../../../../assets/bolt.gif.png";
import "./MissionItem.css";

const MissionItem = ({ imageUrl, title, tonixAmount, gigahash, progress }) => {
  console.log(progress)
  return (
    <div className="mission-item">
      <div className="mission-item-wrapper">
        <div className="mission-item-image">
          <img src={imageUrl} alt="mission-item-" />
        </div>
        <div className="mission-item-details">
          <h2 className="title">{title}</h2>
          <div className="tonix-amount">
            <TONIXIcon />
            <span>
              {tonixAmount.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} TONIX
            </span>
            <span className="gigahash-wrapper">
              {gigahash ? (
                <>
                  <img src={Bolt} alt="bolt" />
                  {gigahash}
                </>
              ) : null}
            </span>
          </div>
        </div>
        <CustomButton className="start-btn">Start</CustomButton>
      </div>
      {progress ? 
        <div className="progress-bar-wrapper">
         <div className="progress-bar" style={{width: `${progress}%`}}/>
       </div>:null  
    }
    </div>
  );
};

export default MissionItem;
