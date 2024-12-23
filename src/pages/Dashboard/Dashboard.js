import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import "./Dashboard.css";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <div className="dashboard-content">
                <Outlet/>
            </div>
    
            <div className="dashboard-nav-wrapper">
                <DashboardNav/>
            </div>
        </div>
    )
}

export default Dashboard;