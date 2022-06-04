import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../Top Bar/Topbar";

const AppLayout = () => {
    return <div style={{
        padding: '30px 0px 0px 300px'
    }}>
        <Topbar />
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;