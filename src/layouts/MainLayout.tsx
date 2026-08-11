import { Outlet } from "react-router"
import { Navigation } from "../Components/Navigation/Navigation"

export const MainLayout = () => {

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}