import { NavLink } from "react-router";
import LogoImage from "../../assets/Logo.svg"
import styles from "./Navigation.module.scss"


export const Navigation = () => {

    return (
        <nav className={styles.navStyle}>
            <figure>
                <img src={LogoImage} alt="Micasa Logo" />
            </figure>

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
                            <input type="text" />
                            <button type="submit">Søg</button>
                        </label>
                    </search>

                </li>
            </ul>
        </nav>
    )
}