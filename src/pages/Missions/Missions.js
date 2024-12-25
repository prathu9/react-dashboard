import { NavLink, Outlet } from "react-router-dom";
import "./Missions.css";

const Missions = () => {
    return(
        <div className="missions-section">
            <h2 className="title">New Missions</h2>
            <h3 className="sub-title">Complete tasks and earn more</h3>
            <ul className="missions-nav">
                <li>
                    <NavLink className={({isActive}) => isActive? "active":""} to="/missions/promo">
                        <span>Promo</span></NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive? "active":""} to="/missions/special">
                        <span>Special</span></NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive? "active":""} to="/missions/ref">
                        <span>Ref</span></NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive? "active":""} to="/missions/contest">
                        <span>Contest</span></NavLink>
                </li>
            </ul>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Missions;