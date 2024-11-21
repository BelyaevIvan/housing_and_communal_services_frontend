import { FC } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
export const Navbar: FC = () =>
{
    return(
        <header className="navbar">
        <div className="nav-icons">
            <a href="/rent_services">
            <Link to={"/"}>
                <img src="http://127.0.0.1:9000/lab1/logo.svg" alt="Меню" />
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