import "./MainPage.css";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

export const MainPage: FC = () => {
    return (
        <>
        <Navbar/>

        {/* для проверки начало */}
        <h1><Link
            to="/register">
            регистрация
        </Link></h1>
        {/* для проверки конец */}
        {/* для проверки начало */}
        <h1><Link
            to="/login">
            login
        </Link></h1>
        {/* для проверки конец */}
        {/* для проверки начало */}
        <h1><Link
            to="/user_settings">
            Редактировать профиль
        </Link></h1>
        {/* для проверки конец */}
        {/* для проверки начало */}
        <h1><Link
            to="/order">
            Корзина
        </Link></h1>
        {/* для проверки конец */}

        <Container>

            <div className="welcome-section">
                <p className="welcome-text">Добро пожаловать на наш сайт! Мы предлагаем услуги по оплате и обслуживанию.</p>
            </div>
        </Container>
        </>
    );
};

export default MainPage;
