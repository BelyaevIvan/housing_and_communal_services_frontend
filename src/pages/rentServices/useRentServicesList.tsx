import { useState, useEffect } from 'react';
import { ChangeEvent } from "../../App.typing.tsx"

import { RentService } from '../../core/mock/RentList';
import { ServiceList_ } from '../../core/mock/RentList';
import { getServiceList } from '../../core/api/service_getters';

import { useSelector, useDispatch } from "react-redux";
import {selectApp} from "../../core/store/slices/selector";
import {setServiceName} from "../../core/store/slices/appSlice.ts";
// import {setPriceFilter} from "../../core/store/slices/appSlice.ts";
// fghjkl
export const useRentServiceCatalogPage = () =>
{
    const [ServiceList, setServiceList] = useState<RentService[]>([])
    // const [ServiceName, setServiceName] = useState("")
    // const [priceFilter, setPriceFilter] = useState<string>("");
    const {Service_name, price_filter} = useSelector(selectApp);
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        getServiceList(Service_name, Number(price_filter))
        .then((data) =>{
        setServiceList(data.services)
    })
        .catch(() =>
        {
            const filteredservices = ServiceList_.filter((service) => {
                return service.title.toLowerCase().startsWith(Service_name.toLowerCase())
            })
            setServiceList(filteredservices)
        })
    }

    const handleSearchNameChange = (e: ChangeEvent) => {
       
        // setServiceName(e.target.value)
        dispatch(setServiceName(e.target.value))
    }

    const handlePriceFilterClick = () => {
        // setPriceFilter("0"); // Устанавливаем фильтр по цене 0

        getServiceList(Service_name, 0)
            .then((data) => {
                setServiceList(data.services);
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

    useEffect(() =>{
        getServiceList()
        .then((data) => {
            setServiceList(data.services)
        })
        .catch(() => {
            setServiceList(ServiceList_)
        })

        // setServiceList(ServiceList_)
    }, [])


    return {
        ServiceList,
        handleSearchClick,
        handleSearchNameChange,
        handlePriceFilterClick,
        Service_name,
        price_filter
    }
}