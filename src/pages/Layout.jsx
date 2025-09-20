import TestNav from "../shared/TestNav";
import { Outlet } from "react-router";

function Layout(){
    return (
        <>
            <TestNav />
            <Outlet />
        </>
    )
}

export default Layout