import "./OrderPage.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../core/api";
import { RentOrderWithInfo, Related } from "../../core/api/Api";
import { ChangeEvent } from "../../App.typing";
import { RentOrderService } from "../../core/api/Api";
import { RentOrder } from "../../core/api/Api";

export const useCargoInShippingPage = () => {
    const { id } = useParams();
    const [Address, setAddress] = useState<string>("");
    const [amounts, setAmounts] = useState<{ [key: string]: number }>({});
    const [OrderData, setOrderData] = useState<RentOrderWithInfo>();
    const navigate = useNavigate();
    const [total_price, setTotalPrice] = useState<string>("0");
    const [Allow_Edit, setAllow_Edit] = useState<boolean>(true);
    const [monthName, setMonthName] = useState<string>("");



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


    // Хендлер на изменение текста в поле ввода
    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonthName(e.target.value);  // Обновляем значение monthName
    };
    
    // Хендлер на нажатие кнопки для изменения значения monthName
    const handleMonthSubmit = () => {
        alert(monthName)
    };

    /**
     * Проверяет, является ли строка числом с плавающей точкой
     */
    const isFloat = (value: string | null): boolean => {
        return value !== null && !isNaN(parseFloat(value));
    };

    /**
     * Вычисляет разницу в месяцах между двумя датами
     */
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

    /**
     * Обновляет количество (amount) и пересчитывает итоговую стоимость
     */
    const updAmounts = (key: number, lastReading: string | null, currentReading: string | null) => {
        let amount = 0;

        if (isFloat(lastReading) && isFloat(currentReading)) {
            amount = Math.max(0, parseFloat(currentReading || "0") - parseFloat(lastReading || "0"));
        } else if (lastReading && currentReading) {
            try {
                amount = Math.max(0, getMonthsDifference(lastReading, currentReading));
            } catch {
                console.error("Error parsing dates for readings:", { lastReading, currentReading });
                amount = 0;
            }
        }

        setAmounts((prev) => ({ ...prev, [key]: amount }));

        // Обновление чтений в API
        const data: RentOrderService = {
            order: Number(id),
            service: key,
            last_reading: lastReading,
            current_reading: currentReading,
        };

        api.rentOrders.rentOrdersServicesUpdateReadingUpdate(key.toString(), id || "", data)
            .then(() => console.log("Readings updated"))
            .catch(() => console.log("Error updating readings"));
    };

    /**
     * Пересчитывает общую стоимость заявки
     */
    const calculateTotalPrice = () => {
        let sum = 0;

        Object.entries(amounts).forEach(([key, amount]) => {
            api.rentServices.rentServicesRead(key)
                .then((data) => {
                    const pricePerUnit = Number(data.data.price.split(" ")[0]);
                    sum += pricePerUnit * amount;
                    setTotalPrice(sum.toString());
                })
                .catch(() => console.log("Error fetching service data"));
        });
    };

    const updPage = () => {
        if (id) {
            api.rentOrders.rentOrdersRead(id)
                .then((data) => {
                    setOrderData(data.data);
                    if (data.data?.status != "DRAFT") {
                        setAllow_Edit(false);
                    }
                    setAddress(data.data.address);
                    
                    const month = data.data.order_date.split("-")[1];
                    setMonthName(getMonthName(month));

                    // Обработка услуг
                    const updatedAmounts: { [key: string]: number } = {};
                    data.data.services.forEach((service: Related) => {
                        updAmounts(
                            service.service.pk || 0,
                            String(service.last_reading),
                            String(service.current_reading)
                        );
                    });

                    setAmounts(updatedAmounts);
                    calculateTotalPrice();
                })
                .catch(() => console.log("Error fetching order data"));
        }
    };

    useEffect(updPage, []);

    const handleChangeOrg = (e: ChangeEvent) => {
        setAddress(e.target.value);
    };


    const hadleChangeAddrClick = () => {
        if (!OrderData) {
            console.error("Order data is not loaded");
            return;
        }
    
        const updatedServices: RentOrderService[] = OrderData.services.map((service) => ({
            order: Number(id),
            service: Number(service.service.pk), // Преобразуем объект `service.service` в ID
            last_reading: service.last_reading,
            current_reading: service.current_reading,
        }));
    
        const updatedOrder: RentOrder = {
            pk: Number(id),
            order_date: OrderData.order_date,
            address: Address,
            status: OrderData.status,
            total_amount: OrderData.total_amount,
            formation_date: OrderData.formation_date,
            completion_date: OrderData.completion_date,
            moderator: OrderData.moderator,
            client: OrderData.client,
            services: updatedServices, // Передаём преобразованный массив
        };
    
        api.rentOrders.rentOrdersEditUpdate(String(id), updatedOrder)
            .then(() => {
                // alert("Адрес зафиксирован")
                console.log("Address updated successfully");
                updPage();
            })
            .catch((error) => {
                console.error("Failed to update address:", error);
            });
    };
    
    

    const handleClearClick = () => {
        api.rentOrders.rentOrdersDelDelete(id || "")
            .then(() => navigate("/service_catalog"))
            .catch(() => console.log("Error deleting order"));
    };

    const handleFormClick = () => {
        api.rentOrders.rentOrdersRejectUpdate(id || "")
            .then(() => navigate("/service_catalog"))
            .catch(() => console.log("Error rejecting order"));
    };

    const func = (id: number, currentReading: string | null) => {}


    // let month = OrderData!.order_date.split(".")[1];

    
    

    return {
        OrderData,
        id,
        Allow_Edit,
        amounts,
        total_price,
        Address,
        updAmounts,
        handleClearClick,
        handleChangeOrg,
        handleFormClick,
        hadleChangeAddrClick,
        func,
        handleMonthChange,
        monthName,
        handleMonthSubmit
    };
};
