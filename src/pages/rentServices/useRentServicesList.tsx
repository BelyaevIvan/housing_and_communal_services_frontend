// import { useState, useEffect } from 'react';
import { ChangeEvent } from "../../App.typing.tsx"

// import { RentService } from '../../core/mock/RentList';
import { ServiceList_ } from '../../core/mock/RentList';
// import { getServiceList } from '../../core/api/service_getters';

import { useSelector, useDispatch } from "react-redux";
import {selectApp} from "../../core/store/slices/selector";
import { setOrderData } from "../../core/store/slices/appSlice";
import { RentService } from "../../core/api/Api.ts";
import { setServiceName } from "../../core/store/slices/appSlice";

import { useEffect, useState } from "react";
import { api } from "../../core/api";
export const useRentServiceCatalogPage = () =>{
    const [ServiceList , setServiceList] = useState<RentService[]>([])
    const {Service_name, Order_id, price_filter} = useSelector(selectApp);
    const [ItemsInCart , setItemsInCart] = useState<Number | null>(null)
    const [IsActive, setIsActive] = useState<boolean>(false)

    const dispatch = useDispatch()
    const handleSearchServiceClick = () => {
        console.log(111111111111)
        // getCargoList(Cargo_name,Number(price_filter))
        api.rentServices.rentServicesList({title : Service_name, min_price : price_filter})
            .then((data) => {
                console.log('good')
                // setCargoList(data.cargoes);
                setServiceList(data.data.ServiceList)
                setItemsInCart(Number(data.data.items_in_cart));
                setIsActive(true)
                // setShippingID(Number(data.data.shipping_id))
                dispatch(setOrderData(Number(data.data.OrderId)))
            })
            .catch(() => {
                console.log('bad')
                const filteredcargos = ServiceList_.filter((service) =>
                    service.title.toLowerCase().startsWith(Service_name.toLowerCase())
                )
                setServiceList(filteredcargos);
                setItemsInCart(null)
                setIsActive(true)
                // setShippingID(0)
                dispatch(setOrderData(0))
            });
    };
    useEffect(handleSearchServiceClick, [])


    const handleSearchNameChange = (e: ChangeEvent) => {
        // setSearchCargoName(e.target.value);
        dispatch(setServiceName(e.target.value))
    };

    const handlePriceFilterClick = () => {
                // setPriceFilter("0"); // Устанавливаем фильтр по цене 0
        
                api.rentServices.rentServicesList({title : Service_name, min_price : '0'})
                    .then((data) => {
                        setServiceList(data.data.ServiceList);
                    })
                    .catch(() => {
                        const filteredAndSortedServices = ServiceList_
                        .filter((service) => {
                            // Убираем нечисловые символы из цены и фильтруем
                            return service.title.toLowerCase().startsWith(Service_name.toLowerCase())
                        })
                        .sort((a, b) => {
                            // Сортируем по возрастанию цены
                            const priceA = parseFloat(a.price.split(" ")[0]);
                            const priceB = parseFloat(b.price.split(" ")[0]);
                            return priceA - priceB;
                        });
        
                    setServiceList(filteredAndSortedServices); // Обновляем список
                    });
            };


return { ServiceList,
    Service_name,
    ItemsInCart,
    Order_id,
    price_filter,
    handleSearchServiceClick,
    handleSearchNameChange,
    handlePriceFilterClick,
    IsActive

    
}
}