import Navbar from "../Layout/Navbar"
import { Outlet } from "react-router-dom"

function Layout() {
    console.log(123);
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}


export default Layout