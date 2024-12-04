import { FC, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import "./ServiceInOrderCard.css"; // Подключаем стили
import moneyIcon from "/money_icon.svg";
import { api } from "../../core/api/index.ts";
import { RentOrderService } from "../../core/api/Api.ts";

export interface ServiceInRequestProps {
    id: number;
    title: string;
    pricePerUnit: string;
    logoFilePath: string;
    lastReading: string | null;
    currentReading: string | null;
    isEditable: boolean;
    order_id : string;
    updateReading: (id: number, currentReading: string | null) => void;
}

export const ServiceInRequestCard: FC<ServiceInRequestProps> = ({
    id,
    title,
    pricePerUnit,
    logoFilePath,
    lastReading,
    currentReading,
    isEditable,
    order_id,
    updateReading,
}) => {
    const [currentValue, setCurrentValue] = useState<string | null>(currentReading || "");
    const [calculatedCost, setCalculatedCost] = useState<number>(0);

    const isFloat = (value: string | null): boolean => {
       return value !== null && /^\d+(\.\d+)?$/.test(value);
    };
    const getMonthsDifference = (date1: string, date2: string): number => {
        const m1 = date1.split(".")[1];
        const m2 = date2.split(".")[1];
        const g1 = date1.split(".")[2];
        const g2 = date2.split(".")[2];
        const yearsDiff = Number(g2) - Number(g1);
        const monthsDiff = Number(m2) - Number(m1);

        // const d1 = new Date(date1);
        // const d2 = new Date(date2);
        // console.log(d1, d2)
        console.log(date1, date2)
        // const yearsDiff = d2.getFullYear() - d1.getFullYear();
        // const monthsDiff = d2.getMonth() - d1.getMonth();
        // console.log(d2.getMonth(), d1.getMonth())
        console.log(yearsDiff, monthsDiff)

        return yearsDiff * 12 + monthsDiff;
    };

    const calculateCost = () => {
        let amount = 0;
        if (isFloat(lastReading) && isFloat(currentValue)) {
            amount = Math.max(0, parseFloat(currentValue || "0") - parseFloat(lastReading || "0"));
        } else if (lastReading && currentValue) {
            amount = Math.max(0, getMonthsDifference(lastReading, currentValue));
        }
        const cost = amount * parseFloat(pricePerUnit);
        setCalculatedCost(cost);
    };

    useEffect(() => {
        calculateCost();
    }, [currentValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCurrentValue(value);
    };

    // const handleUpdateClick = () => {
    //     if (isEditable && currentValue !== null) {
    //         api.rentOrders.rentOrdersServicesUpdateReadingUpdate(...);
    //     }
    // };

    const handleUpdateClick = () => {
        if (isEditable && currentValue !== null) {
            // Создаем данные для отправки на бекенд
            const requestData: RentOrderService = {
                order: parseInt(order_id), // ID заявки
                service: id, // ID услуги
                last_reading: lastReading, // Последние показания или дата
                current_reading: currentValue, // Новые показания
            };
    
            // Вызываем метод API
            api.rentOrders
                .rentOrdersServicesUpdateReadingUpdate(order_id, id.toString(), requestData)
                .then(() => {
                    alert("Показания успешно обновлены!");
                    updateReading(id, currentValue); // Обновляем локальное состояние родительского компонента
                })
                .catch((error) => {
                    console.error("Ошибка при обновлении показаний:", error);
                    alert("Не удалось обновить показания.");
                });
        }
    };

    const handleDeleteClick = () => {
        api.rentOrders.rentOrdersServicesDeleteDelete(id.toString() || "", order_id)
        .then(() => {
            alert('услуга удалена из счета')
        })
        .catch(() => {
            alert('не получилось удалить услугу')
        })
    }

    return (
        <div className="order-card">
            <div className="item">
                <img
                    src={logoFilePath}
                    alt="Услуга"
                    className="order-icon"
                />
                <div className="item-description">
                    <h3 className="title1">{title}</h3>
                    <p className="title1">Тариф - {pricePerUnit}</p>
                    {isFloat(lastReading) ? (
                        <>
                            <p className="title1">
                                Последние переданные показания: <span className="qwer">{lastReading}</span>
                            </p>
                            <p className="title1">
                                Текущие показания{" "}
                                <input
                                    type="text"
                                    name={`current_reading_${id}`}
                                    value={currentValue || ""}
                                    onChange={handleInputChange}
                                    className="pokaz-bar"
                                    disabled={!isEditable}
                                />
                            </p>
                            {isEditable && (
                                <Button
                                    type="button"
                                    className="search-button ms-2"
                                    onClick={handleUpdateClick}
                                >
                                    Внести показание
                                </Button>
                            )}
                        </>
                    ) : (
                        <p className="title1">
                            Дата последней оплаты: <span className="qwer">{lastReading}</span>
                        </p>
                    )}
                </div>
            </div>
            <div className="itogo">
                <p>
                    <img
                        src={moneyIcon}
                        alt="money"
                        className="money"
                    />{" "}
                    Стоимость: {calculatedCost} ₽
                </p>
            </div>
            {isEditable && (<Button
                type="button"
                className="search-button ms-2"
                onClick={handleDeleteClick}
            >
                Удалить услугу
            </Button>)}
        </div>
    );
};
