import CustomButton from "../../components/CustomButton/CustomButton";
import InviteFriends from "../../components/InviteFriends/InviteFriends";
import {ReactComponent as ListIcon} from "../../assets/icons/list.svg";
import "./Friends.css";
import ReferralRewards from "../../components/ReferralsReward/ReferralRewards";
import { useState } from "react";
import FriendsList from "../../components/FriendsList/FriendsList";
import Portal from "../../components/Portal/Portal";

const Friends = () => {
    const [showFriendslist, setShowFriendsList] = useState(false);

    const handleShowFriendsList = () => {
        setShowFriendsList(true);
    } 

    const handleHideFriendsList = () => {
        setShowFriendsList(false);
    }

    return(
        <div className="friends-section">
            <InviteFriends/>
            <CustomButton onClick={handleShowFriendsList} leftIcon={<ListIcon/>}>
                Open Friends List
            </CustomButton>
            <ReferralRewards/>
            <div className="spacer"></div>
            {
                showFriendslist && 
                <Portal>
                    <FriendsList/>
                </Portal>
            }
        </div>
    )
}

export default Friends;