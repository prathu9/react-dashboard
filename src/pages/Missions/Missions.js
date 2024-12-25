import { Outlet } from "react-router-dom";

const Missions = () => {
    return(
        <div className="missions-section">
            <h2 className="title">New Missions</h2>
            <h3 className="sub-title">Complete tasks and earn more</h3>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Missions;