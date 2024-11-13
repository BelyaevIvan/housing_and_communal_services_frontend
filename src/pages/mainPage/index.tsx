import "./MainPage.css";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar"

export const MainPage: FC = () => {
    return (
        <>
        <Navbar/>
        <Container>

            <div className="welcome-section">
                <p className="welcome-text">Добро пожаловать на наш сайт! Мы предлагаем услуги по оплате и обслуживанию.</p>
                <Link
                to="/service_catalog" className="btn services-button">
                    Перейти к списку услуг
                </Link>
            </div>
        </Container>
        </>
    );
};

export default MainPage;
