import Nav from "./Nav";
import { Outlet } from "react-router";

function Layout(){
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout