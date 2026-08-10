import { Outlet } from "react-router"
import { Navigation } from "../Navigation"

export const MainLayout = () => {

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}