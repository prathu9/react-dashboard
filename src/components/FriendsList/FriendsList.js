import {ReactComponent as MagnifyGlassHIcon} from "../../assets/icons/magnify-glass-h.svg"; 
import "./FriendsList.css";

const FriendsList = () => {
    return(
        <div className="friend-list">
            <div className="level-wrapper">
                <div className="level">
                    <span>Level 1</span>
                    <span>0</span>
                </div>
                <div className="level">
                    <span>Level 2</span>
                    <span>0</span>
                </div>
                <div className="level">
                    <span>Level 3</span>
                    <span>0</span>
                </div>
            </div>
            <div>
                <div className="no-friends">
                    <MagnifyGlassHIcon/>
                    <span>You have no friends yet...</span>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;