import "./UserSettingsPage.css";
import { FC, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Navbar } from "../../components/Navbar";

import { api } from "../../core/api";
import { UserAccountData } from "./typing";
import { ChangeEvent } from "../../App.typing";
import { selectUser } from "../../core/store/slices/selector";
import {  useSelector } from "react-redux";
import { saveUser } from "../../core/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { UpdateUser } from "../../core/store/slices/userSlice";
import { useDispatch } from "../../core/store";

export const UserSettingsPage: FC = () => {
    const {email, Is_Auth} = useSelector(selectUser)
    const user_name = email
    const [UserData, setUserData] = useState<UserAccountData>({
        email : user_name,
        password : ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeData = (e : ChangeEvent) => {
        const {id, value} = e.target
        const yy = UserData
        setUserData((prevState) => ({...prevState, [id]: value}))
    }

    const handleUpdateData = () => {
        console.log(UserData)
        if (UserData.email == '') {
            UserData.email = user_name
        }
        dispatch(UpdateUser(UserData))
        .then(() => {
            console.log('updated')
            dispatch(saveUser({
                email : String(UserData.email),
                Is_Auth : true,
                user_errror: false,
                loading_status : "idle"
            }))
            navigate('/')
        })
        .catch(() => {
            console.log('not updated')
        })
    }

    return (
        <>
            <Navbar />
            <Container>
                <div className="registration-section">
                    <h2 className="registration-header">Редактирование профиля</h2>
                    <Form className="registration-form">
                        
                        <Form.Group controlId="formEmail" className="form-group">
                            <Form.Label className="column-fixed">Email</Form.Label>
                            <input
                                className="search-barr"
                                id="email"
                                placeholder="example@mail.ru"
                                aria-label="email"
                                type="text"
                                onChange={handleChangeData}
                                value={UserData.email}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="form-group">
                            <Form.Label className="column-fixed">Пароль</Form.Label>
                            <input
                                className="search-barr"
                                placeholder="Новый пароль"
                                aria-label="Пароль"
                                type="password"
                                id="password"
                                onChange={handleChangeData}
                                value={UserData.password}
                                required
                            />
                        </Form.Group>
                        <Button className="services-button" type="button" onClick={handleUpdateData}>
                            Изменить данные
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default UserSettingsPage;
