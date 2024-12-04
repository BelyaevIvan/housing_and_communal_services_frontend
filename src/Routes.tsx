import {RouteObject, useRoutes} from "react-router-dom";
import {MainPage} from "./pages/mainPage";
import { RentServiceCatalogPage} from "./pages/rentServices"
import {RegistrationPage} from "./pages/registration"
import {LoginPage} from "./pages/login"
import {UserSettingsPage} from "./pages/user_settings"
import { OrderPage } from "./pages/order";
import { ServicePage } from "./pages/ServicePage";
import { OrderListPage } from "./pages/OrderListPage";


export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage  />,
        },
        {
            path: "service_catalog",
            element: <RentServiceCatalogPage  />,
        },
        {
            path: "services/:id",
            element: <ServicePage/>
        },
        {
            path: "order/:id",
            element: <OrderPage/>
        },
        {
            path: "register",
            element: <RegistrationPage/>
        },
        {
            path: "login",
            element: <LoginPage/>
        },
        {
            path: "user_settings",
            element: <UserSettingsPage/>
        },
        {
            path: "order",
            element: <OrderPage/>
        },
        {
            path: "/order_list",
            element: <OrderListPage/>
        }
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};
