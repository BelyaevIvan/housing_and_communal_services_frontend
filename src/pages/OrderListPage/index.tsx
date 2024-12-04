import "./OrderListPage.css"
import {FC} from "react";
import { TableFilters } from "../../components/TableFilters";
import { OrdersTable } from "../../components/OrdersTable";
import { useShippingListPage } from "./useOrderListPage";
import { Container } from "react-bootstrap";

import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";



export const OrderListPage: FC  = () => {
   const {TableState, filterProps} = useShippingListPage()
    
    return (
        <>
            <Navbar/>
            <Container className="mt-4">
            <h3>История платежей</h3>
            <TableFilters {...filterProps}></TableFilters>

                <OrdersTable {...TableState}></OrdersTable>
            </Container>
        </>
    );
};