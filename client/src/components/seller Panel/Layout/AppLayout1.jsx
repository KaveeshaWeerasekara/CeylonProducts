import { Outlet } from "react-router-dom";
import Sidebar1 from "../sidebar/Sidebar1";


const AppLayout1 = () => {
    return <div style={{
        padding: '30px 0px 0px 300px'
    }}>
        <Sidebar1 />
        <Outlet />
    </div>;
};

export default AppLayout1;