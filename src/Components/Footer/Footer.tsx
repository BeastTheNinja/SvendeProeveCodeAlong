import { NavLink } from "react-router";
import styles from "./Footer.module.scss";

export const Footer = () => {


    return (

        <footer className={styles.footerStyle}>
            <section>
                <h3>Micasa</h3>
                <p>Øster Uttrup Vej 5</p>
                <p>9000 Aalborg</p>
                <br />
                <p>
                    Email: info@homelands.dk
                </p>
                <p>
                    Telefon: +45 1122 3344
                </p>
            </section>
            <section>
                <NavLink to="/" >Forside</NavLink>
                <NavLink to="/Esatate" >Boliger</NavLink>
                <NavLink to="/contact" >Kontakt</NavLink>
                <NavLink to="/login" >Login</NavLink>
            </section>
            <section>
                <h5>
                    Få drømmehuse i din indbakke
                </h5>
                <p>
                    Tilmeld dig vores nyhedsbrev og få nye boliger send direkte til din indbakke
                </p>
                <form>
                    <input type="email" placeholder="Indtast din email" />
                    <input type="submit" value="Tilmeld" />
                </form>
            </section>
        </footer >
    )
}