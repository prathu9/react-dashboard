import { NavLink } from "react-router-dom";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg?react";
import { ReactComponent as WalletActiveIcon } from "../../assets/icons/wallet-active.svg";
import "./DashboardNav.css";
import { ReactComponent as FriendIcon } from "../../assets/icons/friends.svg";
import { ReactComponent as FriendActiveIcon } from "../../assets/icons/friends-active.svg";
import "./DashboardNav.css";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as HomeActiveIcon } from "../../assets/icons/home-active.svg";
import "./DashboardNav.css";
import { ReactComponent as MissionIcon } from "../../assets/icons/mission.svg";
import { ReactComponent as MissionActiveIcon } from "../../assets/icons/mission-active.svg";
import "./DashboardNav.css";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { ReactComponent as MoreActiveIcon } from "../../assets/icons/more-active.svg";
import "./DashboardNav.css";

const DashboardNav = () => {
  return (
    <div className="dashboard-nav">
      <ul>
        <li className="dashboard-nav-item">
          <NavLink to="/wallet" className={({isActive}) => isActive? "active":""}>
            {({ isActive }) => (
              <>
                {isActive ? <WalletActiveIcon /> : <WalletIcon />}
                <span style={{color:`${isActive?"#8774E1":"#fff"}`}}>Wallet</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="dashboard-nav-item">
          <NavLink to="/friends" className={({isActive}) => isActive? "active":""}>
            {({ isActive }) => (
              <>
                {isActive ? <FriendActiveIcon /> : <FriendIcon />}
                <span style={{color:`${isActive?"#8774E1":"#fff"}`}}>Friends</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="dashboard-nav-item">
          <NavLink to="/" className={({isActive}) => isActive? "active":""}>
            {({ isActive }) => (
              <>
                {isActive ? <HomeActiveIcon /> : <HomeIcon />}
                <span style={{color:`${isActive?"#8774E1":"#fff"}`}}>Home</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="dashboard-nav-item">
          <NavLink to="missions" className={({isActive}) => isActive? "active":""}>
            {({ isActive }) => (
              <>
                { isActive ? <MissionActiveIcon /> : <MissionIcon />}
                <span style={{color:`${isActive?"#8774E1":"#fff"}`}}>Missions</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="dashboard-nav-item">
          <NavLink to="/more" className={({isActive}) => isActive? "active":""}>
            {({ isActive }) => (
              <>
                {isActive ? <MoreActiveIcon /> : <MoreIcon />}
                <span style={{color:`${isActive?"#8774E1":"#fff"}`}}>More</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
