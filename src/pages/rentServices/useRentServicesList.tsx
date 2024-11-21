import { useState, useEffect } from 'react';
import { ChangeEvent } from "../../App.typing.tsx"

import { RentService } from '../../core/mock/RentList';
import { ServiceList_ } from '../../core/mock/RentList';
import { getServiceList } from '../../core/api/service_getters';


export const useRentServiceCatalogPage = () =>
{
    const [ServiceList, setServiceList] = useState<RentService[]>([])
    const [ServiceName, setServiceName] = useState("")
    const [priceFilter, setPriceFilter] = useState<string>("");

    const handleSearchClick = () => {
        getServiceList(ServiceName)
        .then((data) =>{
        setServiceList(data.services)
    })
        .catch(() =>
        {
            const filteredservices = ServiceList_.filter((service) => {
                return service.title.toLowerCase().startsWith(ServiceName.toLowerCase())
            })
            setServiceList(filteredservices)
        })
    }

    const handleSearchNameChange = (e: ChangeEvent) => {
       
        setServiceName(e.target.value)
    }

    const handlePriceFilterClick = () => {
        setPriceFilter("0"); // Устанавливаем фильтр по цене 0

        getServiceList(ServiceName, Number(priceFilter))
            .then((data) => {
                setServiceList(data.services);
            })
            .catch(() => {
                const filteredAndSortedServices = ServiceList_
                .filter((service) => {
                    // Убираем нечисловые символы из цены и фильтруем
                    return service.title.toLowerCase().startsWith(ServiceName.toLowerCase())
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
        handlePriceFilterClick
    }
}