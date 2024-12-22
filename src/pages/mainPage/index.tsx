import React, { useEffect } from 'react';
import "./MainPage.css";
import Carousel from '../../components/Carousel/Carousel';
import { FC } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

export const MainPage: FC = () => {
    useEffect(() => {
        console.log("Компонент был смонтирован!");
    }, []);

    return (
        <>
        <Navbar/>

        <Container>

            <div className="welcome-section">
                <p className="welcome-text">Добро пожаловать на наш сайт – удобный сервис для оплаты коммунальных услуг!
                Здесь вы можете быстро и легко оплатить все счета за свет, воду, отопление и другие услуги, не выходя из дома.</p>
                <Carousel />
                <p className="welcome-text">Ваш комфорт – наша забота!
                Удобный инструмент для управления коммунальными платежами: отслеживайте задолженности, оплачивайте счета и получайте квитанции за несколько минут.</p>
            </div>
        </Container>
        </>
    );
};

export default MainPage;

