import "./LoginPage.css";
import { Container, Form, Button } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";
import {FC, useState, useCallback} from "react";
import { LoginDataProps } from "./typing";
import { ChangeEvent } from "../../App.typing";
import { api } from "../../core/api";
import { useDispatch } from "../../core/store";
import { saveUser } from "../../core/store/slices/userSlice.ts";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../core/store/slices/userSlice.ts";

export const LoginPage: FC = () => {
    const navigate = useNavigate()
    const [LoginData, setLoginData] = useState<LoginDataProps>({
        email: "",
        password : ""
    })
    const [error, setError] = useState(''); // для сообщения об ошибке

    const handleLoginChange = (e : ChangeEvent) => {
        const event = e.target
        const {value, id} = event
        setLoginData(prevData => ({
            ...prevData,
            [id]:value
        }));
        setError('');
    }

    const dispatch = useDispatch()

    const clickLogin = () => {
        setError('')
        if (LoginData.password && LoginData.email) {
            dispatch(loginUser(LoginData))
            .unwrap()
            .then((email) => {
                console.log('Успешный вход:', email)
                navigate('/')
            })
        }
    }

    const handleLogin = useCallback(async () => {
        if (!LoginData.password || !LoginData.email) {
            return // можно добавить локальную валидацию
        }

        try {
            const resultAction = await dispatch(loginUser(LoginData))

            if (loginUser.fulfilled.match(resultAction)) {
                //Success auth
                navigate('/')
            } else if (loginUser.rejected.match(resultAction)) {
                console.error('Login failed:', resultAction.payload)
            }
        } catch (err) {
            console.error('Login error:', err)
        }
    }, [LoginData, dispatch, navigate])

    return (
        <>
            <Navbar />
            <Container>
                <div className="registration-section">
                    <h2 className="registration-header">Вход</h2>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Отображение сообщения об ошибке */}
                    <Form className="registration-form">
                        <Form.Group controlId="formEmail" className="form-group">
                            <Form.Label className="column-fixed">Email</Form.Label>
                            <input
                                className="search-barr"
                                id="email"
                                placeholder="example@mail.ru"
                                aria-label="email"
                                value={LoginData.email}
                                onChange={handleLoginChange}
                                type="text"
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
                                value={LoginData.password}
                                onChange={handleLoginChange}
                                required
                            />
                        </Form.Group>
                        <Button className="services-button" type="button" onClick={clickLogin}>
                            Войти
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default LoginPage;
