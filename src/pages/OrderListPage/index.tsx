import "./OrderListPage.css"
import {FC} from "react";
import { TableFilters } from "../../components/TableFilters";
import { OrdersTable } from "../../components/OrdersTable";
import { useShippingListPage } from "./useOrderListPage";
import { Container } from "react-bootstrap";
import { selectUser } from "../../core/store/slices/selector";
import {  useSelector } from "react-redux";

import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";



export const OrderListPage: FC  = () => {
   const {TableState, filterProps} = useShippingListPage()
   const {email, Is_Auth} = useSelector(selectUser)
    return (
        <>
            <Navbar/>
            <Container className="mt-4">
            <h3>История платежей</h3>
            <h5>{email}</h5>
            <TableFilters {...filterProps}></TableFilters>

                <OrdersTable {...TableState}></OrdersTable>
            </Container>
        </>
    );
};