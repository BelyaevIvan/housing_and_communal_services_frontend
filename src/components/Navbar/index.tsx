import { FC } from "react"
import "./Navbar.css"
export const Navbar: FC = () =>
{
    return(
        <header className="navbar">
        <div className="nav-icons">
            <a href="/rent_services">
                <img src="http://127.0.0.1:9000/lab1/logo.svg" alt="Меню" />
            </a>
        </div>
        <h1>Оплата услуг по адресу</h1>
    </header>
    )
}