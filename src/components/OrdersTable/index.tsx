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
        <>
        <div className="orderr-card-main">
                
                <p className="colorrrrr">№</p>
                <p className="colorrrrr">Статус</p>
                <p className="colorrrrr">Дата создания</p>
                <p className="colorrrrr">Дата оформления</p>
                <p className="colorrrrr">Дата завершения</p>
                <p className="colorrrrr">Сумма счета</p>
                <p className="colorrrrr">Адрес</p>
                <p className="colorrrrr">Месяц оплаты</p>
                
            </div>
                {props.data.map((order) => (
                    <div key={order.number} className="orderr-card">
                        <p>
                            <Link
                                to={"/order/" + order.number}
                                className={order.number !== 0 ? "" : "disabled disable"}
                            >
                                {order.number}
                            </Link>
                        </p>
                        <p>{order.status}</p>
                        <p>{order.order_Date}</p>
                        <p>{order.formationDate}</p>
                        <p>{order.completitionDate}</p>
                        <p>{order.status == "Завершен" || order.status == "Отклонен" ? order.total_amount : ''}</p>
                        <p>{order.address}</p>
                        <p>{getMonthName(order.order_Date.split(".")[1])}</p>
                    </div>
                ))}
        </>
    );
};
