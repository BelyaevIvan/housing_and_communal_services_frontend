import { FC } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import logoImage from "/logo.svg"
import logoAccount from "/account.png"
import logoExit from "/exit.png"

import { selectUser } from "../../core/store/slices/selector";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../core/api";
import { refreshApp } from "../../core/store/slices/appSlice";
import { setOrderData } from "../../core/store/slices/appSlice";
import { refreshUser } from "../../core/store/slices/userSlice";
import {selectApp} from "../../core/store/slices/selector";
import { useDispatch } from "../../core/store";
import { logoutUser } from "../../core/store/slices/userSlice";

export const Navbar: FC = () => {
    const {email, Is_Auth} = useSelector(selectUser)
    const {Order_id} = useSelector(selectApp);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logout = () => {
        dispatch(logoutUser(Order_id.toString()))
        .then(() => {
            dispatch(refreshApp())
            navigate('/')
        })
        .catch((data) => {
            if (data.status == 404){
                dispatch(refreshApp())
                navigate('/')
            }
        })
    }


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

        <div>
            {Is_Auth ? 
            <>

                <Link
                    to="/order_list">
                    История платежей
                </Link>

                <Link
                to="/user_settings">
                <img 
                    src={ logoAccount } 
                    alt="Кабинет" 
                    className="fixed-size"/>
                </Link>

                <Link
                    to="/user_settings"
                    onClick={logout}>
                    <img 
                        src={ logoExit } 
                        alt="Выход" 
                        className="fixed-size"/>
                </Link>
            </>
         : 
            <>
                <Link
                    to="/register">
                    Регистрация
                </Link>
                <div> </div>
                <Link
                    to="/login">
                    Войти
                </Link>
            </>
            }
        </div>


    </header>
    )
}