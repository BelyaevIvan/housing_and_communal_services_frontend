// import "./RegistrationPage.css";
// import { FC } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { Navbar } from "../../components/Navbar";
import "./RegistrationPage.css";
import {FC, useState} from "react";
import {Container, Form, Button} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import { RegDataProps } from "./typing";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "../../App.typing";
import { api } from "../../core/api";

export const RegistrationPage: FC = () => {
    const navigate = useNavigate()
    const [RegData, setRegData] = useState<RegDataProps>({
        email : "",
        password : ""
    })
    const [FailedReg, setFailedReg] = useState<string>('')

    const handleRegChange = (e : ChangeEvent) =>{
        const event = e.target
        const {value, id} = event
        setRegData(prevData => ({
            ...prevData,
            [id]: value
        }));
        setFailedReg('')
    }

    const clickReg = () => {
        setFailedReg('')
        if (RegData.email && RegData.password){
            api.createUser.createUserCreate(RegData).then(
                (data) => {
                    console.log(data)
                    navigate('/login')
                }
            )
            .catch((data) => {
                if (data.status == 400){
                    setFailedReg('Данные некорректны или пользователь уже существует')
                }
                else {
                    setFailedReg('Сервер временно недоступен')
                }
            })
        }
    }
    return (
        <>
            <Navbar />
            <Container>
                <div className="registration-section">
                    <h2 className="registration-header">Регистрация</h2>
                    {FailedReg && <div className="alert alert-danger" role="alert">{FailedReg}</div>} {/* Отображение сообщения об ошибке */}
                    <Form className="registration-form">
                        <Form.Group controlId="formEmail" className="form-group">
                            <Form.Label className="column-fixed">Email</Form.Label>
                            <input
                                id="email"
                                className="search-barr"
                                placeholder="example@mail.ru"
                                aria-label="email"
                                type="text"
                                onChange={handleRegChange}
                                value={RegData.email}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="form-group">
                            <Form.Label className="column-fixed">Пароль</Form.Label>
                            <input
                                id="password"
                                className="search-barr"
                                placeholder="Ваш пароль"
                                aria-label="Пароль"
                                type="password"
                                onChange={handleRegChange}
                                value={RegData.password}
                                required
                            />
                        </Form.Group>
                        <Button className="services-button" type="button" onClick={clickReg}>
                            Зарегистрироваться
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default RegistrationPage;
