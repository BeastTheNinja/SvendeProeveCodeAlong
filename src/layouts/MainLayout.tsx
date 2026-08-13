import { Outlet } from "react-router"
import { Navigation } from "../Components/Navigation/Navigation"
import { Footer } from "../Components/Footer/Footer"

export const MainLayout = () => {

    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}