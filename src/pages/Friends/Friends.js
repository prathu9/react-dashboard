import CustomButton from "../../components/CustomButton/CustomButton";
import InviteFriends from "../../components/InviteFriends/InviteFriends";
import {ReactComponent as ListIcon} from "../../assets/icons/list.svg";
import "./Friends.css";
import ReferralRewards from "../../components/ReferralsReward/ReferralRewards";

const Friends = () => {
    return(
        <div className="friends-section">
            <InviteFriends/>
            <CustomButton leftIcon={<ListIcon/>}>
                Open Friends List
            </CustomButton>
            <ReferralRewards/>
            <div className="spacer"></div>
        </div>
    )
}

export default Friends;