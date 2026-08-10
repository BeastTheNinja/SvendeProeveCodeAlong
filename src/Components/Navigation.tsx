import { NavLink } from "react-router";


export const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/estate">Estate</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <search>
                        <label htmlFor="search" className="search">
                            <input type="text" placeholder="Søg..." />
                        </label>
                    </search>

                </li>
            </ul>
        </nav>
    )
}