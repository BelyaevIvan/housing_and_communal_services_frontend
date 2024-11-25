import { FC } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import logoImage from "/logo.svg"

export const Navbar: FC = () =>
{
    return(
        <header className="navbar">
        <div className="nav-icons">
            <a href="/rent_services">
            <Link to={"/"}>
                <img 
                src={ logoImage } 
                alt="Меню" />
            </Link>
            </a>
        </div>
        {/* <h1>Оплата услуг по адресу</h1> */}
        <h1><Link
            to="/service_catalog">
            Каталог услуг
        </Link></h1>
    </header>
    )
}