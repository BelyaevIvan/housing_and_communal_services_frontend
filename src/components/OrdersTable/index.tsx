import { FC } from "react";
import { TableProps } from "./typing";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrdersTable.css";

export const OrdersTable: FC<TableProps> = (props: TableProps) => {

    const getMonthName = (month: string): string => {
        let monthh: string;
    
        switch (month) {
            case "01": monthh = "Январь";
                break;
            case "02": monthh = "Февраль";
                break;
            case "03": monthh = "Март";
                break;
            case "04": monthh = "Апрель";
                break;
            case "05": monthh = "Май";
                break;
            case "06": monthh = "Июнь";
                break;
            case "07": monthh = "Июль";
                break;
            case "08": monthh = "Август";
                break;
            case "09": monthh = "Сентябрь";
                break;
            case "10": monthh = "Октябрь";
                break;
            case "11": monthh = "Ноябрь";
                break;
            case "12": monthh = "Декабрь";
                break;
            default: monthh = "Неверный месяц";
        }
    
        return monthh;
    };

    return (
        <Table striped bordered hover responsive className="custom-table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Статус</th>
                    <th>Дата создания</th>
                    <th>Дата оформления</th>
                    <th>Дата завершения</th>
                    <th>Сумма счета</th>
                    <th>Адрес</th>
                    <th>Месяц оплаты</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((order) => (
                    <tr key={order.number}>
                        <td>
                            <Link
                                to={"/order/" + order.number}
                                className={order.number !== 0 ? "" : "disabled disable"}
                            >
                                {order.number}
                            </Link>
                        </td>
                        <td>{order.status}</td>
                        <td>{order.order_Date}</td>
                        <td>{order.formationDate}</td>
                        <td>{order.completitionDate}</td>
                        <td>{order.total_amount}</td>
                        <td>{order.address}</td>
                        <td>{getMonthName(order.order_Date.split(".")[1])}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
