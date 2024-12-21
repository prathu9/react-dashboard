import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import "./Dashboard.css";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Outlet/>
            <div className="dashboard-nav-wrapper">
                <DashboardNav/>
            </div>
        </div>
    )
}

export default Dashboard;